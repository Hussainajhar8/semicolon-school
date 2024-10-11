const favouritesContainer = document.getElementById("favouritesContainer");

function displayFavourites() {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  if (favourites.length === 0) {
    favouritesContainer.innerHTML = "<p>No favourite recipes found.</p>";
    return;
  }

  favourites.forEach((recipeId) => {
    // Fetch the recipe details from the API using the recipeId
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=e7de16f7bac848eea2b236419df00ed5`
    )
      .then((response) => response.json())
      .then((recipe) => {
        const recipeDiv = document.createElement("div");
        const recipeTitle = document.createElement("h2");
        const recipeImage = document.createElement("img");

        recipeTitle.textContent = recipe.title;
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;

        // Append elements to the recipeDiv
        recipeDiv.appendChild(recipeTitle);
        recipeDiv.appendChild(recipeImage);
        favouritesContainer.appendChild(recipeDiv); // Add recipeDiv to the container
      })
      .catch((error) => console.error("Error fetching recipe details:", error));
  });
}

// Call the function to display favourites when the page loads
displayFavourites();

function goToFavourites() {
  window.location.href = "favourites.html";
}

function goToHome() {
  window.location.href = "index.html";
}
