import { useState } from 'react';
import './Counter.css'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = key => {
    setCounter(prevCounter => {
      if(key) return prevCounter + 1
      else return prevCounter - 1
    })
  }

  const incrementCounter = () => {
    setCounter(prevCounter => {
      return prevCounter + 1 });
  };

  const decrementCounter = () => {
    setCounter(prevCounter => {
      return prevCounter - 1 });
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const isEven = counter % 2 === 0;

  const conditionalMsg = isEven ? 'Is an Even Number' : 'Is an Odd Number'

  return (
    <div className="counter-container">
      <p className="counter">{counter}</p>
      <div className="main-button-container">
        <button className="decrement-button" onClick={() => handleClick(false)}>
          H-Decrease
        </button>
        <button className="increment-button" onClick={() => handleClick(true)}>
          H-Increase
        </button>
      </div>
      <div className="main-button-container">
        <button className="decrement-button" onClick={decrementCounter}>
          Decrease
        </button>
        <button className="increment-button" onClick={incrementCounter}>
          Increase
        </button>
      </div>
      <div className="secondary-button-container">
        <button className="decrement-button" onClick={resetCounter}>
          Reset
        </button>
      </div>
      <div>
        <p className="conditional-msg"> {conditionalMsg} </p>
      </div>
    </div>
  );
}

export default Counter;