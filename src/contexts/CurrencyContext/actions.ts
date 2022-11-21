import { Action, ActionNames, CurrencyItems } from './types';

export const setCurrencies = (payload: CurrencyItems): Action => ({
  type: ActionNames.SET_CURRENCIES,
  payload
});

export const setSelectedCurrency = (payload: string): Action => ({
  type: ActionNames.SET_SELECTED_CURRENCY,
  payload
});

export const addSavedCurrency = (payload: string): Action => ({
  type: ActionNames.ADD_SAVED_CURRENCY,
  payload
});

export const deleteSavedCurrency = (payload: string): Action => ({
  type: ActionNames.DELETE_SAVED_CURRENCY,
  payload
});
