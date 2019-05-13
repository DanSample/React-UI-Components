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
          <div className="solo">
            <NumberButton buttonStyle="btn light " text="clear" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn bold" text="7" />
            <NumberButton buttonStyle="btn bold" text="8" />
            <NumberButton buttonStyle="btn bold" text="9" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn bold" text="4" />
            <NumberButton buttonStyle="btn bold" text="5" />
            <NumberButton buttonStyle="btn bold" text="6" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn bold" text="1" />
            <NumberButton buttonStyle="btn bold" text="2" />
            <NumberButton buttonStyle="btn bold" text="3" />
          </div>
          <div className="solo">
            <NumberButton buttonStyle="btn bold" text="0" />
          </div>
        </div>
        <div className="math-operators">
          <div className="column">
            <ActionButton buttonStyle="btn operator" text="&#247;" />
            <ActionButton buttonStyle="btn operator" text="&#215;" />
            <ActionButton buttonStyle="btn operator" text="&#8722;" />
            <ActionButton buttonStyle="btn operator" text="&#43;" />
            <ActionButton buttonStyle="btn operator" text="&#61;" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
