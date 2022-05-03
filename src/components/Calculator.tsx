import React, {
  useRef,
  useEffect,
  useContext,
} from 'react';
import { toast } from 'react-toastify';
import ResultBox from './ResultBox';
import Buttons from './Buttons/index';
import { ApiContext } from '../contexts/ApiContextProvider';
import { ApiContextType } from '../@types/api';

const Calculator: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    calculate,
    setResult,
    text,
    setText,
  } = useContext(ApiContext) as ApiContextType;

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    try {
      const calculationResult: number = calculate(text);
      setResult(calculationResult);
      setText('');
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      setText('');
    }
    inputRef.current!.focus();
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form className="calculator" onSubmit={handleSubmit}>
      <input id="inputBox" data-testid="inputBox" name="inputBox" className="inputBox" ref={inputRef} value={text} onChange={handleChange} />
      <ResultBox />
      <Buttons inputRef={inputRef} />
    </form>
  );
};

export default Calculator;
