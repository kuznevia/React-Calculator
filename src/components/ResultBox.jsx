import React from 'react';
import PropTypes from 'prop-types';

function ResultBox({ result }) {
  return (
    <div id="result" className="result">
      {result}
    </div>
  );
}

ResultBox.propTypes = {
  result: PropTypes.string.isRequired,
};

export default ResultBox;
