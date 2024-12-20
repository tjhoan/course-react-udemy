import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true);

  return (
    <>
      <h1 className="text-warning">
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-warning" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-outline-warning ml-3" onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
