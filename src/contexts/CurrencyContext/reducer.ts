import { Action, ActionNames, State } from './types';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionNames.SET_CURRENCIES:
      return { ...state, currencyOptions: action.payload };
    case ActionNames.SET_SELECTED_CURRENCY:
      return { ...state, selectedCurrency: action.payload };
    case ActionNames.ADD_SAVED_CURRENCY:
      return { ...state, savedCurrencies: [...state.savedCurrencies, action.payload] };
    case ActionNames.DELETE_SAVED_CURRENCY:
      return {
        ...state,
        savedCurrencies: state.savedCurrencies.filter((item) => item !== action.payload)
      };
    default:
      throw new Error();
  }
};
