export interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
  navItems: NavItem[];
}

export interface HeaderProps {
  navItems: NavItem[];
  selectedCurrency: SelectedCurrency;
  onSelectCurrency: (item: string) => void;
  currencyOptions: CurrencyOptions;
}

export interface NavItem {
  label: string;
  href: string;
}

export type SelectedCurrency = string | null;
export type CurrencyOptions = string[];
