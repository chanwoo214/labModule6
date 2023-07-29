import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberChange = (e, number) => {
    const value = e.target.value;
    if (number === '1') {
      setNumber1(value);
    } else if (number === '2') {
      setNumber2(value);
    }
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <div>
        <input type="number" value={number1} onChange={(e) => handleNumberChange(e, '1')} />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="">Select Operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={number2} onChange={(e) => handleNumberChange(e, '2')} />
        <button onClick={calculateResult}>Calculate</button>
      </div>
      <div>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
