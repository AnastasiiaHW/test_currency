import React, { useContext } from 'react';
import CurrenciesTable from '../../components/CurrenciesTable/CurrenciesTable';
import { addSavedCurrency, CurrencyContext, deleteSavedCurrency } from '../../contexts';
import { getLatestCurrecies, GetLatestCurrenciesResponse } from '../../core/api';
import { useQuery } from '../../hooks';
import QueryStatus from '../../stories/QueryStatus/QueryStatus';
import useRates from './useRates';

const CurrenciesList: React.FC = () => {
  const [{ selectedCurrency, savedCurrencies }, dispatch] = useContext(CurrencyContext);
  const { result, isLoading, error } = useQuery<GetLatestCurrenciesResponse>({
    fetcher: () => getLatestCurrecies({ base: selectedCurrency }),
    deps: [selectedCurrency]
  });

  const rates = useRates({ rates: result ? result.rates : {}, savedCurrencies });

  const handleToggleCurrency = (payload: string) => {
    if (savedCurrencies.includes(payload)) dispatch(deleteSavedCurrency(payload));
    else dispatch(addSavedCurrency(payload));
  };

  return (
    <QueryStatus isLoading={isLoading} error={error}>
      <CurrenciesTable
        rates={rates}
        selectedCurrency={selectedCurrency}
        savedCurrencies={savedCurrencies}
        onToggleSaveCurrency={handleToggleCurrency}
      />
    </QueryStatus>
  );
};

export default CurrenciesList;
