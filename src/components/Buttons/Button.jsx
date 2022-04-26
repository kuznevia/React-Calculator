import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ApiContext } from '../../contexts/ApiContextProvider.jsx';

function Button({ symbol, inputRef }) {
  const {
    text,
    setText,
    setResult,
  } = useContext(ApiContext);

  const handleClick = (e) => {
    if (e.target.textContent === '=') {
      return;
    }
    setText(text + e.target.textContent);
    inputRef.current.focus();
  };

  const handleCancel = () => {
    setText('');
    setResult('');
    inputRef.current.focus();
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

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }).isRequired,
};

export default Button;
