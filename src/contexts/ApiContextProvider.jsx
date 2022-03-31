import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ApiContext = React.createContext(null);

export function ApiContextProvider({ children }) {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');

  const parse = (input) => {
    const symbols = ['+', '-', '*', '/'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let tempNumberString = '';
    const parsedData = [];
    const parsedUserInput = input.split('');
    parsedUserInput.forEach((element, index, arr) => {
      if (symbols.includes(element)) {
        if (tempNumberString !== '') {
          parsedData.push(tempNumberString);
          tempNumberString = '';
        }
        parsedData.push(element);
      }
      if (numbers.includes(element)) {
        if (index === arr.length - 1) {
          tempNumberString += element;
          parsedData.push(tempNumberString);
        }
        tempNumberString += element;
      }
    });
    return parsedData;
  };
  const calculate = (userInput) => {
    const calculations = {
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    };
    const parsedData = parse(userInput);
    console.log(parsedData);
    console.log(calculations);
  };

  const api = useMemo(() => ({
    calculate,
    result,
    setResult,
    text,
    setText,
  }));

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
