// import { Link } from "react-router-dom";

import FruitList from "../components/FruitList.js";

const Home = () => {
  console.log(fruitsObject);
  return (
    <div>
      {/* <Link to={"/about"}>
        <button>Go to About</button>
      </Link> */}
      <h1>Home</h1>
      <p>This is the home page</p>

      <FruitList />
    </div>
  );
};

export default Home;
