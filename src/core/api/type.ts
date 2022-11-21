export interface ConvertCurrencyResponse {
  date: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
}

export type Rates = Record<string, number>;

export interface GetLatestCurrenciesResponse {
  base: string;
  date: string;
  rates: Rates;
  success: boolean;
  timestamp: number;
}

export interface GetSymbolsResponse {
  success: boolean;
  symbols: Record<string, string>;
}

export interface ConvertCurrencyParams {
  from: string;
  to: string;
  amount: string;
}

export interface GetLatestCurrenciesParams {
  base: string;
}
