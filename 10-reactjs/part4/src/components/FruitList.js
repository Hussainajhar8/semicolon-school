import fruitsObject from "../data/fruits.json";

const fruitList = () => {
  return (
    <div>
      {fruitsObject.fruits.map((fruit, index) => (
        <p key={index.toString()}>{fruit}</p>
      ))}
    </div>
  );
};

export default fruitList;
