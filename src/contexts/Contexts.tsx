import React from 'react';
import { CurrencyProvider } from './CurrencyContext/CurrencyContext';

interface ContextsProps {
  children: React.ReactNode;
}

const Contexts: React.FC<ContextsProps> = ({ children }) => {
  return <CurrencyProvider>{children}</CurrencyProvider>;
};

export default Contexts;
