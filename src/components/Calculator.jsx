import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import ResultBox from './ResultBox.jsx';
import Buttons from './Buttons.jsx';

function Calculator() {
  const inputRef = useRef(null);
  const [result, setResult] = useState('Начальное значение');

  const calculate = (values) => setResult(`It will calculate ${values}`);

  const formik = useFormik({
    initialValues: {
      inputBox: '',
    },
    onSubmit: ({ messageBox }, actions) => {
      if (messageBox === '') {
        return;
      }
      try {
        calculate(formik.values.inputBox);
        actions.resetForm({
          values: {
            inputBox: '',
          },
        });
        actions.setSubmitting(false);
      } catch (error) {
        toast.error('Connection Failed');
      }
      inputRef.current.focus();
    },
  });

  return (
    <form className="calculator" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }}>
      <ResultBox result={result} />
      <input id="inputBox" name="inputBox" className="border-0 p-0 px-2 form-control" ref={inputRef} value={formik.values.inputBox} onChange={formik.handleChange} disabled={formik.isSubmitting} />
      <Buttons />
    </form>
  );
}

export default Calculator;
