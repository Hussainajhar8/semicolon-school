const cupboardItems = [
  {
    name: "pasta",
    type: "carb",
    quantity: 3,
    unit: "kg",
    bestBefore: "01/06/2024",
  },
  {
    name: "olive oil",
    type: "oil",
    quantity: 1,
    unit: "litre",
    bestBefore: "15/01/2025",
  },
  {
    name: "tinned tomatoes",
    type: "vegetable",
    quantity: 5,
    unit: "tins",
    bestBefore: "31/12/2023",
  },
  {
    name: "rice",
    type: "carb",
    quantity: 2,
    unit: "kg",
    bestBefore: "01/08/2024",
  },
  {
    name: "baked beans",
    type: "protein",
    quantity: 4,
    unit: "tins",
    bestBefore: "01/03/2024",
  },
  {
    name: "sugar",
    type: "sweetener",
    quantity: 1,
    unit: "kg",
    bestBefore: "31/12/2025",
  },
  {
    name: "salt",
    type: "seasoning",
    quantity: 1,
    unit: "kg",
    bestBefore: "31/12/2026",
  },
  {
    name: "tea",
    type: "beverage",
    quantity: 2,
    unit: "boxes",
    bestBefore: "31/10/2023",
  },
  {
    name: "flour",
    type: "baking",
    quantity: 3,
    unit: "kg",
    bestBefore: "28/02/2024",
  },
  {
    name: "golden syrup",
    type: "sweetener",
    quantity: 1,
    unit: "tin",
    bestBefore: "30/06/2025",
  },
];

const cupboardItemsNames = ["pasta", "olive oil", "rice"];

const printItemToScreen = (item) => {
  const ul = document.getElementById("items");

  const li = document.createElement("li");

  li.textContent = item.name;

  ul.appendChild(li);
};

// forEach()

// Traditional for loop

// for (let i = 0; i < cupboardItems.length; i++) {
//     printItemToScreen(cupboardItems[i]);
// }


// Using forEach method
cupboardItems.forEach(item => printItemToScreen(item));

// .map()

const mappedArray = cupboardItems.map((item) => {
  return {
      name: item.name,
      type: item.type,
      quantity: item.quantity,
  };
});

console.log(mappedArray);
console.log(cupboardItems);


// .filter()

cupboardItems.filter((item) => item.quantity > 1).forEach
(printItemToScreen);

// .sort()

console.log(cupboardItems.sort((a, b) => a.name.localeCompare(b.name)));
console.log(cupboardItems.sort((a, b) => a.quantity - b.quantity));

// .reduce()

console.log(cupboardItems.reduce((sum, item) => sum + item.quantity, 0))
const itemWithMostQuantity = cupboardItems.reduce((highestQuantity, item) => 
  item.quantity > highestQuantity.quantity ? item : highestQuantity
);

console.log(itemWithMostQuantity.name);

// .find()

const rice = cupboardItems.find((item) => item.name === "rice");
console.log(rice);

// .some()

const hasProtein = cupboardItems.some((item) => item.type === "protein")
console.log(`Do we have any protein in the house? ${hasProtein}`)

// .every()

const isAllItemsInStock = cupboardItems.every((item) => item.quantity > 0);

console.log(`Is everything in stock? ${isAllItemsInStock}`);

const isEverythingAVegetable = cupboardItems.every(
  (item) => item.type === "vegetable"
);

console.log(`Is everything a vegatable? ${isEverythingAVegetable}`);