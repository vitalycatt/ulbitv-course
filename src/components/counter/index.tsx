import { useState } from "react";
import styles from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(count + 1);

  return (
    <div
    //  className={styles.content}
    >
      <h1
      //    className={styles.value}
      >
        {count}
      </h1>

      <button
        type="button"
        //    className={styles.button}
        onClick={onIncrement}
      >
        Inctement Value
      </button>
    </div>
  );
};
