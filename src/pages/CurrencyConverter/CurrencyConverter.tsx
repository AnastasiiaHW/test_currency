import React from 'react';
import { Box, Button } from '@mui/material';
import { convertCurrecy } from '../../core/api';
import { useLazyQuery } from '../../hooks';
import ConvertField from '../../components/ConvertField/ConvertField';
import QueryStatus from '../../stories/QueryStatus/QueryStatus';

const regex = /^[0-9]* [A-Za-z]{3} in [A-Za-z]{3}$/;

const CurrencyConverter: React.FC = () => {
  const [input, setInput] = React.useState<string>('');
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const { fetchData, result, isLoading, error } = useLazyQuery({ fetcher: convertCurrecy });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  React.useEffect(() => {
    if (input.match(new RegExp(regex))) setIsValid(true);
    else setIsValid(false);
  }, [input]);

  const handleConvertCurrency = () => {
    const [from, toCurrency] = input.split('in');
    const [amount, fromCurrency] = from.split(' ');

    if (fromCurrency && toCurrency && amount)
      fetchData({ from: fromCurrency.trim(), to: toCurrency.trim(), amount: amount.trim() });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        <ConvertField value={input} onChange={handleInputChange} />
        <Button disabled={!isValid} onClick={handleConvertCurrency}>
          Convert
        </Button>
      </Box>
      <QueryStatus isLoading={isLoading} error={error}>
        {result && <Box>result: {result.result}</Box>}
      </QueryStatus>
    </Box>
  );
};

export default CurrencyConverter;
