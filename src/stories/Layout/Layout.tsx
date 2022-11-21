import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import { Main } from './Layout.styles';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({
  children,
  navItems,
  currencyOptions,
  selectedCurrency,
  onSelectCurrency
}) => {
  return (
    <Box>
      <Header
        selectedCurrency={selectedCurrency}
        currencyOptions={currencyOptions}
        onSelectCurrency={onSelectCurrency}
        navItems={navItems}
      />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Box>
  );
};

export default Layout;
