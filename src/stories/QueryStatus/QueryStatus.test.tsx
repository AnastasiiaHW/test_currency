import React from 'react';
import QueryStatus from './QueryStatus';
import { render, screen } from '@testing-library/react';

describe('QueryStatus', () => {
  it('loading is working', () => {
    render(
      <QueryStatus isLoading={true} error={''}>
        content
      </QueryStatus>
    );
    const loader = screen.getByTestId(/loader-icon/);
    expect(loader).toBeInTheDocument();
  });

  it('error is working', () => {
    render(
      <QueryStatus isLoading={false} error={'test'}>
        content
      </QueryStatus>
    );
    const error = screen.getByTestId(/error-icon/);
    expect(error).toBeInTheDocument();
  });

  it('content is visible', () => {
    render(
      <QueryStatus isLoading={false} error={''}>
        content
      </QueryStatus>
    );
    const error = screen.getByText(/content/);
    expect(error).toBeInTheDocument();
  });
});
