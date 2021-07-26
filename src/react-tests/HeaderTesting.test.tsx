import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '../components';

describe('Header', () => {
  it('html markup', () => {
    render(<Header />);
    expect(screen.debug());
  });

  it('correct name', () => {
    render(<Header />);
    expect(
      screen.getByText(/Best converter & valid currency course/i)
    ).toBeInTheDocument();
  });
});
