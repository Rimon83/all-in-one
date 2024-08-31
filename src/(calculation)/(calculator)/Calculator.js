import React, { useEffect } from 'react'
import "./Calculator.css"
import interactive from './main';

const Calculator = () => {
 useEffect(() => {
    const cleanup = interactive();

    // Cleanup the event listeners
    return () => {
      cleanup();
    };
 },[])

  return (
    <section className="section_container">
      <h1>Calculator</h1>
      <section className="calculator">
        <input type="text" id="display" disabled value="0"/>
        <div className="buttons">
            <button className="operator" data-operator="C">C</button>
            <button className="operator" data-operator="/">/</button>
            <button className="operator" data-operator="*">*</button>
            <button className="operator" data-operator="-">-</button>

            <button className="number" data-number="7">7</button>
            <button className="number" data-number="8">8</button>
            <button className="number" data-number="9">9</button>
            <button className="operator" data-operator="+">+</button>

            <button className="number" data-number="4">4</button>
            <button className="number" data-number="5">5</button>
            <button className="number" data-number="6">6</button>
            <button className="operator" data-operator="=">=</button>

            <button className="number" data-number="1">1</button>
            <button className="number" data-number="2">2</button>
            <button className="number" data-number="3">3</button>

            <button className="number zero" data-number="0">0</button>
            <button className="operator" data-operator=".">.</button>
        </div>
      </section>
    </section>
  );
}

export default Calculator