const API_KEY = "e7de16f7bac848eea2b236419df00ed5";
const recipeId = localStorage.getItem("selectedRecipeId");

const recipeDetailsContainer = document.getElementById(
  "recipeDetailsContainer"
);

if (recipeId) {
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Inspect the data in the console

      // Create and display the recipe details
      const recipeTitle = document.createElement("h2");
      const recipeImage = document.createElement("img");
      // const recipeInstructions = document.createElement("div");

      // Recipe Title
      recipeTitle.textContent = data.title;

      // Recipe Image
      recipeImage.src = data.image;
      recipeImage.alt = data.title;

      // Ready in X minutes
      const readyIn = document.createElement("p");
      readyIn.textContent = `Ready in ${data.readyInMinutes} minutes`;

      // Ingredients List
      const ingredientsTitle = document.createElement("h3");
      ingredientsTitle.textContent = "Ingredients";

      const ingredientsList = document.createElement("ul");
      data.extendedIngredients.forEach((ingredient) => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = `${ingredient.original}`; // Display the original string of the ingredient
        ingredientsList.appendChild(ingredientItem);
      });

      // Instructions Title
      const instructionsTitle = document.createElement("h3");
      instructionsTitle.textContent = "Instructions";

      const instructionsList = document.createElement("ol");

      // Step-by-step instructions
      if (data.analyzedInstructions.length > 0) {
        data.analyzedInstructions[0].steps.forEach((step) => {
          const stepItem = document.createElement("li");
          stepItem.textContent = step.step;
          instructionsList.appendChild(stepItem);
        });
      } else {
        instructionsList.textContent = "No instructions available.";
      }

      // Create a container for the favourite/unfavourite buttons
      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.flexDirection = "column";
      buttonContainer.style.marginTop = "10px";

      // Favourite Button
      const favouriteButton = document.createElement("button");
      favouriteButton.textContent = "Favourite ⭐";
      favouriteButton.style.marginBottom = "10px"; // Add space between buttons

      // Unfavourite Button
      const unfavouriteButton = document.createElement("button");
      unfavouriteButton.textContent = "Unfavourite 💔";

      // Get favourites from localStorage
      const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
      if (favourites.includes(recipeId)) {
        favouriteButton.disabled = true;
      } else {
        unfavouriteButton.disabled = true;
      }

      // Favourite button logic
      favouriteButton.onclick = function () {
        let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        if (!favourites.includes(recipeId)) {
          favourites.push(recipeId);
          localStorage.setItem("favourites", JSON.stringify(favourites));
          alert("Recipe added to favourites!");
          favouriteButton.disabled = true;
          unfavouriteButton.disabled = false;
        }
      };

      // Unfavourite button logic
      unfavouriteButton.onclick = function () {
        let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        favourites = favourites.filter((id) => id !== recipeId);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        alert("Recipe removed from favourites!");
        unfavouriteButton.disabled = true;
        favouriteButton.disabled = false;
      };

      buttonContainer.appendChild(favouriteButton);
      buttonContainer.appendChild(unfavouriteButton);

      // Append everything to the container
      recipeDetailsContainer.appendChild(recipeTitle);
      recipeDetailsContainer.appendChild(recipeImage);
      recipeDetailsContainer.appendChild(buttonContainer);
      recipeDetailsContainer.appendChild(readyIn);
      recipeDetailsContainer.appendChild(ingredientsTitle);
      recipeDetailsContainer.appendChild(ingredientsList);
      recipeDetailsContainer.appendChild(instructionsTitle);
      recipeDetailsContainer.appendChild(instructionsList);
    })
    .catch((error) => console.error("Error fetching recipe details:", error));
} else {
  recipeDetailsContainer.textContent = "No recipe selected!";
}
