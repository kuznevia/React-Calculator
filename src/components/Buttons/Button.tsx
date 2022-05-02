import React, { useContext } from 'react';
import { ApiContext } from '../../contexts/ApiContextProvider';
import { ApiContextType } from '../../@types/api';
import { IButtons } from '../../@types/api';

const Button: React.FC<IButtons> = ({ symbol, inputRef }) => {
  const {
    text,
    setText,
    setResult,
  } = useContext(ApiContext) as ApiContextType;

  const handleClick = (e:React.ChangeEvent<HTMLButtonElement>) => {
    if (e.target.textContent === '=') {
      return;
    }
    setText(text + e.target.textContent);
    inputRef.current!.focus();
  };

  const handleCancel = () => {
    setText('');
    setResult('');
    inputRef.current!.focus();
  };

  if (symbol === '=') {
    return (
      <button type="submit" className="calculatorButtons">
        {symbol}
      </button>
    );
  }

  return (
    <button onClick={symbol === 'C' ? handleCancel : handleClick} className="calculatorButtons" type="button">
      {symbol}
    </button>
  );
}

export default Button;
