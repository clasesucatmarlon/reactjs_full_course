import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  /* const Add = () => {
    setCounter(counter + 1);
  }

  const Sub = () => {
    counter < 1 ? setCounter(0) : setCounter(counter - 1);
  } */
  const handleCounter = (operation) => {
    if (operation === '+') {
      setCounter(counter + 1);
      return
    }
    counter < 1 ? setCounter(0) : setCounter(counter - 1);
  }

  return (
    <>
      <h2>Counter: {counter}</h2>
      {/* <button onClick={Add}>+</button>
      <button onClick={Sub}>-</button> */}
      <button onClick={() => handleCounter('+')}>+</button>
      <button onClick={() => handleCounter('-')}>-</button>
    </>
  );
}

export default Counter;