// JSX, Components, Props

import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading color="green" />
        <Heading color="blue" />
        <Heading color="red" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
