import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contexts from '../contexts/Contexts';
import { defaultTheme } from '../core/theme';
import AppRouter from '../router';
import AppWrapper from './AppWrapper';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>loading</div>}>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <CssBaseline />
            <Contexts>
              <AppWrapper>
                <AppRouter />
              </AppWrapper>
            </Contexts>
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
