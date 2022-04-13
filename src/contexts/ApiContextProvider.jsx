import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import parseInput from './parser.js';
import doMath from './calculator.js';

export const ApiContext = React.createContext(null);

export function ApiContextProvider({ children }) {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');

  const calculate = (userInput) => {
    const parsedUserInput = parseInput(userInput);
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
