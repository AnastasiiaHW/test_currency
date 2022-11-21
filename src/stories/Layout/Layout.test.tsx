import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from './Layout';

const MockComponent = () => (
  <Layout
    navItems={[{ label: 'label', href: 'href' }]}
    currencyOptions={['USD', 'UAH']}
    selectedCurrency={'USD'}
    onSelectCurrency={function () {
      alert('');
    }}>
    content
  </Layout>
);

describe('Layout', () => {
  it('navItems', () => {
    render(<MockComponent />);

    const navItem = screen.getByText(/label/);
    expect(navItem).toBeInTheDocument();
  });

  it('Select currency input', () => {
    render(<MockComponent />);

    const input = screen.getByRole('combobox');
    console.log(input);
    expect(input).toHaveValue('USD');

    const arrow = screen.getByTestId(/ArrowDropDownIcon/);
    fireEvent.click(arrow);

    const options = screen.getAllByRole(/option/);
    expect(options).toHaveLength(2);
  });
});
