import React from 'react';
import Button from './Button';
import { IButtons } from '../../@types/api';

const Buttons: React.FC<IButtons> = ({ inputRef }) => (
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

export default Buttons;
