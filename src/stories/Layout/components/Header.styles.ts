import { Autocomplete, Box, styled, Toolbar } from '@mui/material';

export const RightPanel = styled(Box)({
  display: 'flex',
  gap: '10px'
});

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  height: '40px'
});

export const StyledAutocomplete = styled(Autocomplete)({
  width: '300px'
});
