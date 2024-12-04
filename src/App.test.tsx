import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders three buttons', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});
