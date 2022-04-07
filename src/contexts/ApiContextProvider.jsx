import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ApiContext = React.createContext(null);

export function ApiContextProvider({ children }) {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const symbols = ['*', '/', '+', '-', '(', ')'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const parse = (input) => {
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
    const calculations = [
      { '*': (a, b) => a * b },
      { '+': (a, b) => a + b },
    ];
    let parsedUserInput = parse(userInput);
    console.log(parsedUserInput);
    let newCalc = [];
    let currentOp;
    for (let i = 0; i < calculations.length; i += 1) {
      for (let j = 0; j < parsedUserInput.length; j += 1) {
        if (calculations[i][parsedUserInput[j]]) {
          currentOp = calculations[i][parsedUserInput[j]];
        } else if (currentOp) {
          newCalc[newCalc.length - 1] = currentOp(
            (Number(newCalc[newCalc.length - 1])),
            Number(parsedUserInput[j]),
          );
          currentOp = null;
        } else {
          newCalc.push(parsedUserInput[j]);
        }
      }
      parsedUserInput = newCalc;
      newCalc = [];
    }
    if (parsedUserInput.length > 1) {
      console.log('Error: unable to resolve calculation');
      return parsedUserInput;
    }
    return parsedUserInput[0];
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
