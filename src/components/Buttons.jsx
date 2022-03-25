import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContextProvider.jsx';

function Buttons() {
  const {
    text,
    setText,
    setResult,
  } = useContext(ApiContext);

  const handleClick = (e) => {
    setText(text + e.target.textContent);
  };

  const handleCancel = () => {
    setText('');
    setResult('');
  };

  return (
    <div className="wrapper">
      <button onClick={handleCancel} className="calculatorButtons" type="button">
        C
      </button>
      <button onClick={handleClick} className="calculatorButtons square" type="button">
        &#8730;
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        %
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        /
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        7
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        8
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        9
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        х
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        4
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        5
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        6
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        -
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        1
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        2
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        3
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        +
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        00
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        0
      </button>
      <button onClick={handleClick} className="calculatorButtons" type="button">
        ,
      </button>
      <button className="calculatorButtons" type="submit">
        =
      </button>
    </div>
  );
}

export default Buttons;
