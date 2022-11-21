import React from 'react';
import { TableRates } from '../../components/CurrenciesTable/types';
import { SavedCurrencies } from '../../contexts/CurrencyContext/types';
import { Rates } from '../../core/api';

interface UseRatesProps {
  rates: Rates;
  savedCurrencies: SavedCurrencies;
}

type UseRatesReturn = TableRates;

const useRates = ({ rates, savedCurrencies }: UseRatesProps): UseRatesReturn => {
  const result = React.useMemo(() => {
    return rates
      ? Object.entries(rates)
          .map(([key, value]) => ({ symbol: key, rate: value }))
          .sort((a) => (savedCurrencies.includes(a.symbol) ? -1 : 1))
      : [];
  }, [rates, savedCurrencies]);

  return result;
};

export default useRates;
