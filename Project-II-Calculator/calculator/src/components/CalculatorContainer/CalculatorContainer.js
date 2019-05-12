import React from 'react';
import './CalculatorContainer.css';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorContainer = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay text="0" />
      <div className="calculator-body">
        <div className="num-pad">
          <div className="row">
            <NumberButton buttonStyle="btn light" text="Clear" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn light" text="7" />
            <NumberButton buttonStyle="btn light" text="8" />
            <NumberButton buttonStyle="btn light" text="9" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn light" text="4" />
            <NumberButton buttonStyle="btn light" text="5" />
            <NumberButton buttonStyle="btn light" text="6" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn light" text="1" />
            <NumberButton buttonStyle="btn light" text="2" />
            <NumberButton buttonStyle="btn light" text="3" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn light" text="0" />
          </div>
        </div>
        <div className="math-operators">
          <div className="column">
            <ActionButton buttonStyle="btn operator" text="&#247;" />
            <ActionButton buttonStyle="btn operator" text="x" />
            <ActionButton buttonStyle="btn operator" text="-" />
            <ActionButton buttonStyle="btn operator" text="+" />
            <ActionButton buttonStyle="btn operator" text="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
