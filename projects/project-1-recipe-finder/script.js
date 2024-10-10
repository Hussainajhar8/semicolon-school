const containerDiv = document.getElementById("recipesContainer");

function findRecipe() {
  const ingredient = document.getElementById("ingredientInput").value;
  const API_KEY = "e7de16f7bac848eea2b236419df00ed5";
  const URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${API_KEY}`;

  if (ingredient.trim() === "") {
    alert("Empty String, please enter a valid ingredient");
    return;
  }

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      containerDiv.innerHTML = "";

      data.forEach((recipe) => {
        const recipeDiv = document.createElement("div");
        const recipeTitle = document.createElement("h2");
        const recipeImage = document.createElement("img");

        recipeTitle.textContent = recipe.title;
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;

        recipeDiv.appendChild(recipeTitle);
        recipeDiv.appendChild(recipeImage);

        containerDiv.appendChild(recipeDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}
