// // Selectors:

// // Single element selectors
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("h1"));

// // Multiple element selectors
// console.log(document.querySelectorAll("h1"));
// console.log(document.getElementsByClassName("page-content"));

// const ul = document.getElementById("ingredients")

// const lastElementFromUl = ul.lastElementChild

// lastElementFromUl.innerText = "Milk"

// Building the Application

const button = document.getElementById("submit-button");

// button.addEventListener("click", function() {
//   event.preventDefault();
//   console.log("Added an ingredient");
//   const input = document.getElementById("ingredient-input")
//   const ingredientName = input.value;
//   const ul = document.getElementById("ingredients");

//   const li = document.createElement("li");
//   li.textContent = ingredientName;
//   ul.appendChild(li);

//   input.value = ""

//   button.style.backgroundColor = "lightblue"
  
//   const html = html.querySelector("html")
//   html.style.color = "red"

button.addEventListener("click", function (event) {
  event.preventDefault();

  const input = document.getElementById("ingredient-input");
  const ingredientName = input.value;

  if (ingredientName !== "") {
    const ul = document.getElementById("ingredients");
    const li = document.createElement("li");

    li.textContent = ingredientName;
    ul.appendChild(li);

    input.value = "";
  }
});
