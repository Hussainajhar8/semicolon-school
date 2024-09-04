console.log("Hello");

var flower = "rose";

console.log(flower);

const unchangeable_variable = "Ajhar";

console.log(unchangeable_variable);

let this_change = "blue";

this_change = "red";

console.log(this_change);

console.log("the type of this_change is " + typeof this_change)
console.log()
console.log()
console.log()
console.log()
console.log()

const firstName = "Ajhar";
const surname = "Hussain";

// const fullName = firstName + " " + surname;
// const fullName = firstName.concat("").concat(surname);
const fullName = `${firstName} ${surname}`;

console.log(fullName)

// Arrays

const countriesInTheUK = ["England","Wales","Scotland","Ireland"]

console.log(countriesInTheUK)


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

console.log(user.age);
console.log(user.firstName);
console.log(user.location);
console.log(user.surname);

// Loops

for(let count = 0; count < 10; count ++) {
  console.log(`This loop has run ${count} times`);
}


// While loop

let i = 0
while (i < 10) {
  console.log(i);
  i++;
}

//Get the 1st letter of each county in the countriesintheUK var

// 1st way
for(let i=0; i < countriesInTheUK.length; i++) {
  console.log(countriesInTheUK[i].charAt(0));
}

// 2nd way
for(let country of countriesInTheUK) {
  console.log(country.charAt(0));
}

// 3rd way
countriesInTheUK.forEach(function firstLetter(country) {
  console.log(country.charAt(0));
})

function subtractNumbers(number1, number2) {
  const sum = number1 - number2
  return sum
}

console.log(subtractNumbers(20,6));