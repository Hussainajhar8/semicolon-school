const containerDiv = document.getElementById("recipesContainer");

function findRecipe() {
  const ingredient = document.getElementById("ingredientInput").value;
  const API_KEY = "e7de16f7bac848eea2b236419df00ed5";
  const URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${API_KEY}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}
