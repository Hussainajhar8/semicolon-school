import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Link to={"/"}>
        <button>Go to Home</button>
      </Link>
      <Link to={"/about"}>
        <button>Go to About</button>
      </Link>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};

export default App;
