import { useState } from "react";
import "./index.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(count + 1);

  return (
    <div className="content">
      <h1 className="value">{count}</h1>

      <button type="button" className="button" onClick={onIncrement}>
        Inctement Value
      </button>
    </div>
  );
};
