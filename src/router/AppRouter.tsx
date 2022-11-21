import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from './paths';

const CurrenciesList = React.lazy(() => import('../pages/CurrenciesList'));
const CurrencyConverter = React.lazy(() => import('../pages/CurrencyConverter'));

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<CurrenciesList />} />
      <Route path={paths.convert} element={<CurrencyConverter />} />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};

export default AppRouter;
