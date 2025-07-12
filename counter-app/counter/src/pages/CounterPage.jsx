import { useState } from "react";

export const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => setCounter(counter + 1);
  const minus = () => setCounter(counter - 1);

  return (
    <>
      <div className="counter-value">{counter}</div>
      <button className="counter-btn" onClick={plus}>+</button>
      <button className="counter-btn" onClick={minus}>-</button>
    </>
  );
}