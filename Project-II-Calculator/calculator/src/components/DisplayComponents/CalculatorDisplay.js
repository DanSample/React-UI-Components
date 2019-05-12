import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="calculator-display">
      <p className="text">{props.text}</p>
    </div>
  );
};

export default CalculatorDisplay;
