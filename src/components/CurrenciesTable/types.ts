export interface CurrenciesTableProps {
  rates: TableRates;
  selectedCurrency: string;
  savedCurrencies: string[];
  onToggleSaveCurrency: (currency: string) => void;
}

export type TableRates = Array<{ symbol: string; rate: number }>;
