import React from 'react';

interface UseQueryParams<Params, Response> {
  fetcher: (params: Params) => Promise<Response>;
}

interface UseQueryResponse<Params, Response> {
  isLoading: boolean;
  error: string;
  fetchData: (params: Params) => void;
  result: Response | null;
}

export const useLazyQuery = <Params, Response>({
  fetcher
}: UseQueryParams<Params, Response>): UseQueryResponse<Params, Response> => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<Response | null>(null);
  const [error, setError] = React.useState<string>('');

  const fetchData = async (params: Params) => {
    setIsLoading(true);

    try {
      const data = await fetcher(params);
      setError('');
      setResult(data);
    } catch (err: unknown) {
      if (typeof err === 'string') setError(err);
      else setError('Unknown error');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetchData, result };
};
