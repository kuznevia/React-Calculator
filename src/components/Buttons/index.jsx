import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

function Buttons({ inputRef }) {
  return (
    <div className="wrapper">
      <Button symbol="C" inputRef={inputRef} />
      <Button symbol="(" inputRef={inputRef} />
      <Button symbol=")" inputRef={inputRef} />
      <Button symbol="/" inputRef={inputRef} />
      <Button symbol="7" inputRef={inputRef} />
      <Button symbol="8" inputRef={inputRef} />
      <Button symbol="9" inputRef={inputRef} />
      <Button symbol="*" inputRef={inputRef} />
      <Button symbol="4" inputRef={inputRef} />
      <Button symbol="5" inputRef={inputRef} />
      <Button symbol="6" inputRef={inputRef} />
      <Button symbol="-" inputRef={inputRef} />
      <Button symbol="1" inputRef={inputRef} />
      <Button symbol="2" inputRef={inputRef} />
      <Button symbol="3" inputRef={inputRef} />
      <Button symbol="+" inputRef={inputRef} />
      <Button symbol="00" inputRef={inputRef} />
      <Button symbol="0" inputRef={inputRef} />
      <Button symbol="." inputRef={inputRef} />
      <Button symbol="=" inputRef={inputRef} />
    </div>
  );
}

Buttons.propTypes = {
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }).isRequired,
};

export default Buttons;
