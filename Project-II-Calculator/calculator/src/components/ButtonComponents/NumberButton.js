import React from 'react';
import './Button.css';

const numberBtn = props => {
  return <button className={props.buttonStyle}>{props.text}</button>;
};

export default numberBtn;
