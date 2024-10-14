import "./Heading.css";

function Heading({ color }) {
  let className = "";
  if (color === "blue") {
    className = "Heading-main-blue";
  } else if (color === "red") {
    className = "Heading-main-red";
  } else if (color === "green") {
    className = "Heading-main-green";
  }

  return <h1 className={className}>Heading</h1>;
}

export default Heading;
