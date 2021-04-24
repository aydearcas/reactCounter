import { useState } from 'react';
import './Counter.css'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => {
      return prevCounter + 1 });
  }

  const decrementCounter = () => {
    setCounter(prevCounter => {
      return prevCounter - 1 });
  }

  return (
    <div className="counter-container">
      <p className="counter">{counter}</p>
      <div className="button-container">
        <button className="increment-button" onClick={incrementCounter}>
          Increase
        </button>
        <button className="decrement-button" onClick={decrementCounter}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;