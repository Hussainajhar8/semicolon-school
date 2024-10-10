const containerDiv = document.getElementById("recipesContainer");

function findRecipe() {
  const ingredient = document.getElementById("ingredientInput").value;
  const API_KEY = "e7de16f7bac848eea2b236419df00ed5";
  const URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=24&apiKey=${API_KEY}`;

  if (ingredient.trim() === "") {
    alert("Empty String, please enter a valid ingredient");
    return;
  }

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      containerDiv.innerHTML = ""; // Clear previous results

      const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

      data.forEach((recipe) => {
        const recipeDiv = document.createElement("div");
        const recipeTitle = document.createElement("h2");
        const recipeImage = document.createElement("img");

        recipeTitle.textContent = recipe.title;
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;

        // View Details Button
        const viewDetailsButton = document.createElement("button");
        viewDetailsButton.textContent = "View Details";
        viewDetailsButton.onclick = function () {
          viewDetails(recipe.id); // Pass the recipe ID to the function
        };

        // Favourite and Unfavourite Buttons
        const favouriteButton = document.createElement("button");
        favouriteButton.textContent = "Favourite ⭐";
        favouriteButton.onclick = function () {
          favouriteRecipe(recipe.id);
          favouriteButton.disabled = true; // Disable the button when favorited
          unfavouriteButton.disabled = false; // Enable the unfavorite button
        };

        const unfavouriteButton = document.createElement("button");
        unfavouriteButton.textContent = "Unfavourite 💔";
        unfavouriteButton.disabled = true; // Initially disable the unfavorite button
        unfavouriteButton.onclick = function () {
          unfavouriteRecipe(recipe.id);
          unfavouriteButton.disabled = true; // Disable the button when unfavorited
          favouriteButton.disabled = false; // Enable the favorite button
        };

        // Check if this recipe is already in favorites
        if (favourites.includes(recipe.id)) {
          favouriteButton.disabled = true; // If already favorited, disable the favourite button
          unfavouriteButton.disabled = false; // Enable unfavorite button
        }

        // Append elements to the recipeDiv
        recipeDiv.appendChild(recipeTitle);
        recipeDiv.appendChild(recipeImage);
        recipeDiv.appendChild(viewDetailsButton);
        recipeDiv.appendChild(favouriteButton);
        recipeDiv.appendChild(unfavouriteButton);

        containerDiv.appendChild(recipeDiv); // Add recipeDiv to the container
      });
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}

function viewDetails(recipeId) {
  localStorage.setItem("selectedRecipeId", recipeId); // Store the recipe ID
  window.location.href = "recipe.html"; // Redirect to the recipe page
}

function favouriteRecipe(recipeId) {
  // Get existing favorites from localStorage
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  // Check if the recipe is already in the list
  if (!favourites.includes(recipeId)) {
    favourites.push(recipeId);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    alert("Recipe added to favourites!");
  }
}

function unfavouriteRecipe(recipeId) {
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  // Filter out the recipeId from the list
  favourites = favourites.filter((id) => id !== recipeId);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  alert("Recipe removed from favourites!");
}
