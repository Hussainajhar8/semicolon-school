// import { Link } from "react-router-dom";
import { useState } from "react";
import FruitList from "../components/FruitList.js";

const Home = () => {
  const [inputValue, setinputValue] = useState("");

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div>
      {/* <Link to={"/about"}>
        <button>Go to About</button>
      </Link> */}
      <h1>Home</h1>
      <p>This is the home page</p>

      <h2> Add new fruit</h2>

      <div className="fruit-form">
        <form action="#">
          <label htmlFor="Fruit-Name">Fruit Name</label>
          <input type="text" value={inputValue} onChange={handleChange} />
        </form>
      </div>
      <p>They are typing</p>
      <p>{inputValue}</p>
    </div>
  );
};

export default Home;
