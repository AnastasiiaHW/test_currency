import axios from 'axios';
import {
  ConvertCurrencyParams,
  ConvertCurrencyResponse,
  GetLatestCurrenciesParams,
  GetLatestCurrenciesResponse,
  GetSymbolsResponse
} from './type';

const baseURL = 'https://api.apilayer.com/exchangerates_data';
const apikey = process.env.REACT_APP_APIKEY;

if (!apikey) throw new Error('apikey is required');

const instance = axios.create({
  baseURL,
  headers: {
    apikey
  }
});

const convertCurrecy = async ({
  from,
  to,
  amount
}: ConvertCurrencyParams): Promise<ConvertCurrencyResponse> => {
  const { data } = await instance.get<ConvertCurrencyResponse>(
    `/convert?amount=${amount}&from=${from}&to=${to}`
  );
  return data;
};

const getLatestCurrecies = async ({
  base
}: GetLatestCurrenciesParams): Promise<GetLatestCurrenciesResponse> => {
  const { data } = await instance.get<GetLatestCurrenciesResponse>(`/latest?base=${base}`);
  return data;
};

const getSymbols = async (): Promise<GetSymbolsResponse> => {
  const { data } = await instance.get<GetSymbolsResponse>('/symbols');
  return data;
};

export { convertCurrecy, getLatestCurrecies, getSymbols };
