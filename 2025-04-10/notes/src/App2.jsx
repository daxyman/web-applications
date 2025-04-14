import { useState } from "react";

export default function App1() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return (
    <main className="container">
      <h1>
        Combien de fois mon enseignant va-t-il dire le mot state dans ce
        chapitre ?
      </h1>

      <div className="counter">
        <button
          className="minus"
          aria-label="Decrease count"
          onClick={subtract}
        >
          –
        </button>

        {/* <h2 className="count">{count}</h2> */}

        <Count number = {count} />

        <button className="plus" aria-label="Increase count" onClick={add}>
          +
        </button>
      </div>
    </main>
  );
}
