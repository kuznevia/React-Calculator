import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ApiContext = React.createContext(null);

export function ApiContextProvider({ children }) {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const calculate = (userInput) => new Function('return ' + userInput)();

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
