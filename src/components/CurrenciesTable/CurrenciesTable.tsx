import React from 'react';
import { Save } from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { CurrenciesTableProps } from './types';

const CurrenciesTable: React.FC<CurrenciesTableProps> = ({
  rates,
  selectedCurrency,
  savedCurrencies,
  onToggleSaveCurrency
}) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Base</TableCell>
            <TableCell>To</TableCell>
            <TableCell align="right">Icon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rates.map((item) => (
            <TableRow key={item.symbol}>
              <TableCell component="th" scope="row">
                1 {selectedCurrency} = {item.rate} {item.symbol}
              </TableCell>
              <TableCell>
                {(1 / item.rate).toFixed(6)} {selectedCurrency} = 1 {item.symbol}
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onToggleSaveCurrency(item.symbol)}>
                  <Save sx={savedCurrencies.includes(item.symbol) ? { color: 'red' } : {}} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrenciesTable;
