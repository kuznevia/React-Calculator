import React from 'react';
import { ToastContainer } from 'react-toastify';
import Calculator from './components/Calculator';
import { ApiContextProvider } from './contexts/ApiContextProvider';
import './App.css';

const App: React.FC = () => {
  const toastAutoCloseTime = 5000;

  return (
    <ApiContextProvider>
      <div className="container">
        <div className="calculator-border">
          <Calculator />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={toastAutoCloseTime}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </ApiContextProvider>
  );
}

export default App;
