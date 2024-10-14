import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function plusOne() {
    setCount(count + 1);
  }

  const minusOne = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Heading color="green" />

        <p>
          Current count is <span>{count}</span>
        </p>

        <button style={{ fontSize: 30 }} onClick={plusOne}>
          +1
        </button>
        <button style={{ fontSize: 30 }} onClick={minusOne}>
          -1
        </button>
      </header>
    </div>
  );
}

export default App;
