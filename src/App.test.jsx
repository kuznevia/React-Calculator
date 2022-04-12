import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('testing sum, 2+2+4', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '2+2+4' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('8');
});
