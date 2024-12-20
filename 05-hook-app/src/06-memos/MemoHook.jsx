import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }
  return `${iterationNumber} iteraciones realizadas.`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(3000);
  const [show, setshow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1 className="text-warning">
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-warning" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-outline-warning ml-3" onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
