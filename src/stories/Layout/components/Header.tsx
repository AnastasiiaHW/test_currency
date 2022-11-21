import React from 'react';
import { AppBar, Button, TextField, Typography } from '@mui/material';
import { HeaderProps } from '../types';
import { RightPanel, StyledAutocomplete, StyledToolbar } from './Header.styles';

const Header: React.FC<HeaderProps> = ({
  navItems,
  currencyOptions,
  selectedCurrency,
  onSelectCurrency
}) => {
  return (
    <AppBar component="nav">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          TEST TASK
        </Typography>

        <RightPanel>
          <StyledAutocomplete
            size="small"
            value={selectedCurrency}
            disablePortal
            onChange={(e, value) => typeof value === 'string' && onSelectCurrency(value)}
            options={currencyOptions}
            renderInput={(params) => <TextField {...params} label="Currencies" />}
          />
          {navItems.map(({ label, href }) => (
            <Button href={href} key={href} style={{ color: '#fff' }}>
              {label}
            </Button>
          ))}
        </RightPanel>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
