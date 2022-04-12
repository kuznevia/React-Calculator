import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ApiContext } from '../../contexts/ApiContextProvider.jsx';

function Button({ symbol }) {
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
  };

  const handleCancel = () => {
    setText('');
    setResult('');
    const input = document.getElementById('inputBox');
    input.focus();
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
};

export default Button;
