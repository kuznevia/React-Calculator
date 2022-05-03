import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContextProvider';
import { ApiContextType } from '../@types/api';

const ResultBox: React.FC = () => {
  const { result } = useContext(ApiContext) as ApiContextType;

  return (
    <div data-testid="resultBox" id="result" className="result">
      {result}
    </div>
  );
};

export default ResultBox;
