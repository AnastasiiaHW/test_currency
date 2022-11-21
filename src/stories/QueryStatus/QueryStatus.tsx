import { Error } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import Loader from '../Loader/Loader';
import { CenterContent } from './QueryStatus.styles';

interface QueryStatusProps {
  isLoading: boolean;
  error: string;
  children: React.ReactNode;
}

const QueryStatus: React.FC<QueryStatusProps> = ({ isLoading, error, children }) => {
  if (isLoading)
    return (
      <CenterContent data-testid="loader-icon">
        <Loader />
      </CenterContent>
    );
  if (error)
    return (
      <CenterContent data-testid="error-icon">
        <Error />
      </CenterContent>
    );
  return <Box>{children}</Box>;
};

export default QueryStatus;
