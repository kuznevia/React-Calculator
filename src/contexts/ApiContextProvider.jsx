import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ApiContext = React.createContext(null);

export function ApiContextProvider({ children }) {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const symbols = ['*', '/', '+', '-'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const parenthesesPreParse = (input) => {
    const parsedInput = input.reduce((acc, element) => {
      acc.push(element);
      if (acc.includes('(') && acc.includes(')')) {
        const leftBracketIndex = acc.indexOf('(');
        const rightBracketIndex = acc.indexOf(')');
        const newArr = acc.splice(leftBracketIndex, rightBracketIndex - leftBracketIndex + 1);
        newArr.pop();
        newArr.shift();
        acc.push(newArr);
      }
      return acc;
    }, []);
    return parsedInput;
  };

  const parse = (input) => {
    let tempNumberString = '';
    const splittedUserInput = typeof input === 'string' ? input.split('') : input;
    const preparsedUserInput = parenthesesPreParse(splittedUserInput);
    const parsedUserInput = preparsedUserInput.reduce((acc, element, index, arr) => {
      if (typeof element === 'object') {
        const parsedElement = parse(element);
        acc.push(parsedElement);
      }
      if (symbols.includes(element)) {
        if (tempNumberString !== '') {
          acc.push(tempNumberString);
          tempNumberString = '';
        }
        acc.push(element);
      }
      if (numbers.includes(element)) {
        if (index === arr.length - 1) {
          tempNumberString += element;
          acc.push(tempNumberString);
        }
        tempNumberString += element;
      }
      return acc;
    }, []);
    return parsedUserInput;
  };

  const doMath = (parsedUserInput) => {
    const calculations = [
      { '*': (a, b) => a * b },
      { '/': (a, b) => a / b },
      { '+': (a, b) => a + b },
      { '-': (a, b) => a - b },
    ];
    let calculatedInput = parsedUserInput;
    let newCalc = [];
    let currentOp;
    for (let i = 0; i < calculations.length; i += 1) {
      for (let j = 0; j < calculatedInput.length; j += 1) {
        if (typeof calculatedInput[j] === 'object') {
          const calculatedArr = doMath(calculatedInput[j]);
          if (currentOp) {
            newCalc[newCalc.length - 1] = currentOp(
              (Number(newCalc[newCalc.length - 1])),
              Number(calculatedArr),
            );
            currentOp = null;
          } else {
            newCalc.push(calculatedArr);
          }
        } else if (calculations[i][calculatedInput[j]]) {
          currentOp = calculations[i][calculatedInput[j]];
        } else if (currentOp) {
          newCalc[newCalc.length - 1] = currentOp(
            (Number(newCalc[newCalc.length - 1])),
            Number(calculatedInput[j]),
          );
          currentOp = null;
        } else {
          newCalc.push(calculatedInput[j]);
        }
      }
      calculatedInput = newCalc;
      newCalc = [];
      console.log(calculatedInput);
    }
    if (calculatedInput.length > 1) {
      console.log('Ошибка');
      return calculatedInput;
    }
    return calculatedInput[0];
  };

  const calculate = (userInput) => {
    const parsedUserInput = parse(userInput);
    return doMath(parsedUserInput);
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
