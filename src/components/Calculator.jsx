import React, {
  useRef,
  useEffect,
  useContext,
} from 'react';
import { toast } from 'react-toastify';
import ResultBox from './ResultBox.jsx';
import Buttons from './Buttons/index.jsx';
import { ApiContext } from '../contexts/ApiContextProvider.jsx';

function Calculator() {
  const inputRef = useRef(null);
  const {
    calculate,
    setResult,
    text,
    setText,
  } = useContext(ApiContext);

  useEffect(() => {
    const messageInput = document.getElementById('inputBox');
    messageInput.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    try {
      const calculationResult = calculate(text);
      setResult(calculationResult);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="calculator" onSubmit={handleSubmit}>
      <input id="inputBox" data-testid="inputBox" name="inputBox" className="inputBox" ref={inputRef} value={text} onChange={handleChange} />
      <ResultBox />
      <Buttons />
    </form>
  );
}

export default Calculator;
