export type CurrencyItems = Record<string, string>;
export type SavedCurrencies = string[];

export interface State {
  selectedCurrency: string;
  currencyOptions: CurrencyItems;
  savedCurrencies: SavedCurrencies;
}

export enum ActionNames {
  SET_CURRENCIES = 'SET_CURRENCIES',
  SET_SELECTED_CURRENCY = 'SET_SELECTED_CURRENCY',
  ADD_SAVED_CURRENCY = 'ADD_SAVED_CURRENCY',
  DELETE_SAVED_CURRENCY = 'DELETE_SAVED_CURRENCY'
}

export type Action =
  | { type: ActionNames.SET_CURRENCIES; payload: CurrencyItems }
  | { type: ActionNames.SET_SELECTED_CURRENCY; payload: string }
  | { type: ActionNames.ADD_SAVED_CURRENCY; payload: string }
  | { type: ActionNames.DELETE_SAVED_CURRENCY; payload: string };

export type CurrencyContextProps = [State, React.Dispatch<Action>];
