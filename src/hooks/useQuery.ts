import React from 'react';

interface UseQueryParams<Response> {
  fetcher: () => Promise<Response>;
  deps?: unknown[];
}

interface UseQueryResponse<Response> {
  result: Response | null;
  isLoading: boolean;
  error: string;
}

export const useQuery = <Response>({
  fetcher,
  deps
}: UseQueryParams<Response>): UseQueryResponse<Response> => {
  const [result, setResult] = React.useState<Response | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetcher();
      setError('');
      setResult(data);
    } catch (err: unknown) {
      if (typeof err === 'string') setError(err);
      else setError('Unknown error');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, deps ?? []);

  return { result, isLoading, error };
};
