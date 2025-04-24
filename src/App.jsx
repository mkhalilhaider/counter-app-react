import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter((count) => count + 1);
  };
  const subCount = () => {
    setCounter((count) => count - 1);
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <p>Click on add button to add and subtract button to subtract</p>
      <button
        onClick={addCount}
        disabled={counter >= 20}
        style={{
          cursor: counter >= 20 ? "not-allowed" : "pointer",
        }}
      >
        Add Value
      </button>
      <hr />
      <button
        onClick={subCount}
        disabled={counter <= 0}
        style={{
          cursor: counter <= 0 ? "not-allowed" : "pointer",
        }}
      >
        Subtract Value
      </button>
      <br />
      <br />
      <br />
      <marquee behavior="slide" direction="left">
        First React Project Made with 💻 by{" "}
        <a href="https://www.github.com/mkhalilhaider" target="_blank">
          Muhammad Khalil Haider
        </a>{" "}
      </marquee>
    </>
  );
}

export default App;
