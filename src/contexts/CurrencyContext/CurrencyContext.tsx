import React, { createContext } from 'react';
import { localStorageUtils } from '../../core/utils';
import { reducer } from './reducer';
import { CurrencyContextProps, State } from './types';

const DEFAULT_CURRENCY = 'USD';

const selectedCurrencyKey = 'SELECTED_CURRENCY';
const savedCurrenciesKey = 'SAVED_CURRENCIES';

const { setLocalStorageItem, getLocalStorageItem } = localStorageUtils();

const initialState: State = {
  selectedCurrency: getLocalStorageItem<string>(selectedCurrencyKey) || DEFAULT_CURRENCY,
  currencyOptions: {},
  savedCurrencies: getLocalStorageItem<string[]>(savedCurrenciesKey) || []
};

export const CurrencyContext = createContext<CurrencyContextProps>([
  initialState,
  (state) => ({ ...state })
]);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    setLocalStorageItem(selectedCurrencyKey, state.selectedCurrency);
  }, [state.selectedCurrency]);

  React.useEffect(() => {
    setLocalStorageItem(savedCurrenciesKey, state.savedCurrencies);
  }, [state.savedCurrencies.length]);

  return <CurrencyContext.Provider value={[state, dispatch]}>{children}</CurrencyContext.Provider>;
};
