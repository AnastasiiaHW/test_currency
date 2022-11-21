import React, { useContext } from 'react';
import { CurrencyContext, setCurrencies, setSelectedCurrency } from '../contexts';
import { getSymbols, GetSymbolsResponse } from '../core/api';
import { useQuery } from '../hooks/useQuery';
import { paths } from '../router';
import Layout from '../stories/Layout/Layout';

const navItems: Array<{ label: string; href: string }> = [
  { label: 'List', href: paths.home },
  { label: 'Convert', href: paths.convert }
];

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useContext(CurrencyContext);
  const { result } = useQuery<GetSymbolsResponse>({
    fetcher: getSymbols
  });

  const formattedCurrencyOptions = React.useMemo(() => {
    return Object.keys(state.currencyOptions).map((item) => item);
  }, [JSON.stringify(state.currencyOptions)]);

  React.useEffect(() => {
    result !== null && dispatch(setCurrencies(result.symbols));
  }, [result]);

  const handleSelectCurrency = (item: string) => dispatch(setSelectedCurrency(item));

  return (
    <Layout
      onSelectCurrency={handleSelectCurrency}
      navItems={navItems}
      currencyOptions={formattedCurrencyOptions}
      selectedCurrency={state.selectedCurrency}>
      {children}
    </Layout>
  );
};

export default AppWrapper;
