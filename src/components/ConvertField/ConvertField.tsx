import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type ConvertFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & TextFieldProps;

const ConvertField: React.FC<ConvertFieldProps> = (props) => {
  return (
    <TextField
      sx={{ width: '100%' }}
      label="Convert"
      size="small"
      placeholder="example: 15 usd in uah"
      variant="outlined"
      {...props}
    />
  );
};

export default ConvertField;
