import React, { useState, useMemo } from 'react';
import parseInput from './parser';
import doMath from './calculator';
import { ApiContextType, IApiContextProvider } from '../@types/api';

export const ApiContext = React.createContext<ApiContextType | null>(null);

export const ApiContextProvider: React.FC<IApiContextProvider> = ({ children }) => {
  const [result, setResult] = useState<number|string>('');
  const [text, setText] = useState('');

  const calculate = (userInput: string): number => {
    const parsedUserInput = parseInput(userInput);
    return doMath(parsedUserInput);
  };
  const api = useMemo(() => ({
    calculate,
    result,
    setResult,
    text,
    setText,
  }), undefined);

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
};
