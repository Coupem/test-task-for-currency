import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Navigation } from '../components';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

const history = createMemoryHistory();

describe('Navigation', () => {
  it('html markup', () => {
    render(<Navigation />);
    expect(screen.debug());
  });

  it('correct name', () => {
    render(<Navigation />);
    expect(screen.getByText(/course/i)).toBeInTheDocument();
  });

  it('correct name', () => {
    render(<Navigation />);
    expect(screen.getByText(/converter/i)).toBeInTheDocument();
  });

  it('has click button ', () => {
    render(
      <Router history={history}>
        <Navigation />
      </Router>
    );
    const btnConvert = screen.getByTestId('convert');
    fireEvent.click(btnConvert);
  });

  it('has click button ', () => {
    render(
      <Router history={history}>
        <Navigation />
      </Router>
    );
    const btnCourse = screen.getByTestId('course');
    fireEvent.click(btnCourse);
  });
});
