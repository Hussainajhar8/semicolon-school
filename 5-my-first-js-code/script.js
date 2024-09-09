console.log("Hello"); // Output: Hello

var flower = "rose";
console.log(flower); // Output: rose

const unchangeable_variable = "Ajhar";
console.log(unchangeable_variable); // Output: Ajhar

let this_change = "blue";
this_change = "red";
console.log(this_change); // Output: red

console.log("the type of this_change is " + typeof this_change); // Output: the type of this_change is string

console.log(); // Output: (empty line)
console.log(); // Output: (empty line)
console.log(); // Output: (empty line)
console.log(); // Output: (empty line)
console.log(); // Output: (empty line)

const firstName = "Ajhar";
const surname = "Hussain";

// const fullName = firstName + " " + surname;
// const fullName = firstName.concat("").concat(surname);
const fullName = `${firstName} ${surname}`;

console.log(fullName); // Output: Ajhar Hussain

// Arrays
const countriesInTheUK = ["England", "Wales", "Scotland", "Ireland"];

console.log(countriesInTheUK); // Output: ["England", "Wales", "Scotland", "Ireland"]

// Object Literals
const user = {
  firstName: "Ajhar",
  surname: "Hussain",
  age: 24,
  location: {
    country: "UK",
    city: "London",
  },
};

console.log(user.age); // Output: 24
console.log(user.firstName); // Output: Ajhar
console.log(user.location); // Output: { country: 'UK', city: 'London' }
console.log(user.surname); // Output: Hussain

// Loops
for (let count = 0; count < 10; count++) {
  console.log(`This loop has run ${count} times`); 
  // Output: 
  // This loop has run 0 times
  // This loop has run 1 time
  // This loop has run 2 times
  // ...
  // This loop has run 9 times
}

// While loop
let i = 0;
while (i < 10) {
  console.log(i); // Output: 0, 1, 2, 3, ..., 9 (one per line)
  i++;
}


// Get the 1st letter of each country in the countriesInTheUK array

// 1st way
for (let i = 0; i < countriesInTheUK.length; i++) {
  console.log(countriesInTheUK[i].charAt(0)); 
  // Output: E, W, S, I (one per line)
}

// 2nd way
for (let country of countriesInTheUK) {
  console.log(country.charAt(0)); 
  // Output: E, W, S, I (one per line)
}

// 3rd way
countriesInTheUK.forEach(function firstLetter(country) {
  console.log(country.charAt(0)); 
  // Output: E, W, S, I (one per line)
});

// 4th way
countriesInTheUK.forEach((country) => console.log(country.charAt(0)));
// Output: E, W, S, I (one per line)


// Functions
function subtractNumbers(number1, number2) {
  const sum = number1 - number2;
  return sum;
}

console.log(subtractNumbers(20, 6)); // Output: 14

// Arrow Function
const addNumbers = (number1, number2) => {
  const sum = number1 + number2;
  return sum;
};

console.log(addNumbers(3, 6)); // Output: 9

// Trimmed down arrow function 
const addNumberstrimmed = (num1, num2) => num1 + num2;
console.log(addNumberstrimmed(3,2));


// Conditionals
const countriesInTheUk = ["England", "Wales", "Scotland", "Northern Ireland"];

if (countriesInTheUk[0] === "Wales") {
    console.log("This is Wales");
} else if (countriesInTheUk[0] === "Scotland") {
    console.log("This is Scotland");
} else {
    console.log("This is not Wales or Scotland");
} // Output: "This is not Wales or Scotland"


const myAgeAsAString = "28";
const myAgeAsANumber = 28;

if (myAgeAsANumber == myAgeAsAString) {
  console.log("These values & types are the same"); // Output: "These values & types are the same"
}

if (myAgeAsANumber === myAgeAsAString) {
    console.log("These values & types are the same"); // Output: No output
}
// Triple equal ("===") is more strict than double equals ("==")


// Ternary
// condition ? output you want if true : output you want if false

const myAge = 28
const myBadgeColor = myAge >= 20 ? "Blue" : "Green" ;
console.log(myBadgeColor) // Output Blue