import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleCounterChange = (delta) => {
    setCounter((prevCounter) => prevCounter + delta);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleCounterChange(1)}> +1 </button>
      <button onClick={() => handleCounterChange(-1)}> -1 </button>
      <button aria-label="btn-reset" onClick={() => setCounter(value)}>
        {' '}
        Reset{' '}
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};
