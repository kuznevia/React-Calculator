import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('testing sum, 2+2+4', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '2+2+4' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('8');
});

test('testing sub, 2+6-10', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '2+6-10' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('-2');
});

test('testing multiplication, 3*6*2', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '3*6*2' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('36');
});

test('testing division, 3*6/2', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '3*6/2' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('9');
});

test('testing subsequence, 2+2*2', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '2+2*2' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('6');
});

test('testing parentheses, (2+2)*(2+2)', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '(2+2)*(2+2)' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('16');
});

test('testing parentheses option 2, (2+2)*2', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '(2+2)*2' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('8');
});

test('testing complex, 3*(2+2)/12-66+(23*12)', () => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value: '3*(2+2)/12-66+(23*12)' },
  });
  fireEvent.click(screen.getByText(/=/i));
  const resultField = screen.getByTestId(/resultBox/i);
  expect(resultField.textContent).toBe('211');
});
