import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

const runCalc = (value) => {
  fireEvent.change(screen.getByTestId(/inputBox/i), {
    target: { value },
  });
  fireEvent.click(screen.getByText(/=/i));
  return screen.getByTestId(/resultBox/i);
};

test('testing sum, 2+2+4', () => {
  const resultField = runCalc('2+2+4');
  expect(resultField.textContent).toBe('8');
});

test('testing sub, 2+6-10', () => {
  const resultField = runCalc('2+6-10');
  expect(resultField.textContent).toBe('-2');
});

test('testing multiplication, 3*6*2', () => {
  const resultField = runCalc('3*6*2');
  expect(resultField.textContent).toBe('36');
});

test('testing division, 3*6/2', () => {
  const resultField = runCalc('3*6/2');
  expect(resultField.textContent).toBe('9');
});

test('testing subsequence, 2+2*2', () => {
  const resultField = runCalc('2+2*2');
  expect(resultField.textContent).toBe('6');
});

test('testing parentheses, (2+2)*(2+2)', () => {
  const resultField = runCalc('(2+2)*(2+2)');
  expect(resultField.textContent).toBe('16');
});

test('testing parentheses option 2, (2+2)*2', () => {
  const resultField = runCalc('(2+2)*2');
  expect(resultField.textContent).toBe('8');
});

test('testing complex, 3*(2+2)/12-66+(23*12)', () => {
  const resultField = runCalc('3*(2+2)/12-66+(23*12)');
  expect(resultField.textContent).toBe('211');
});

test('testing fractional number opt1, 1.5+1.5', () => {
  const resultField = runCalc('1.5+1.5*1.5');
  expect(resultField.textContent).toBe('3.75');
});

test('testing fractional number opt2, (3.5+5)/8.5-10.5*2.5', () => {
  const resultField = runCalc('(3.5+5)/8.5-10.5*2.5');
  expect(resultField.textContent).toBe('-25.25');
});
