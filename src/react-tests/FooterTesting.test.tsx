import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Footer } from '../components';

describe('Footer', () => {
  it('html markup', () => {
    render(<Footer />);
    expect(screen.debug());
  });

  it('correct name', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2021 My. Built My Theme./i)).toBeInTheDocument();
  });
});
