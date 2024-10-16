import fruitsObject from "../data/fruits.json";

const fruitList = () => {
  return (
    <div>
      Fruit List
      {fruitsObject.fruits.map((fruit, index) => (
        <p key={index.toString()}>{fruit}</p>
      ))}
    </div>
  );
};

export default fruitList;
