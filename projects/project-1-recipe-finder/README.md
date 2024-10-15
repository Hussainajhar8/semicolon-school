# Recipe Finder App

## Overview

The **Recipe Finder App** allows users to search for recipes based on ingredients, view recipe details, and manage a list of favorite recipes. Users can search for recipes through the Spoonacular API and save their favorites, which are stored locally. Click [here](https://ajharcookbook.netlify.app/) to see the live version.

## Features

1. **Search Recipes**: Enter an ingredient to search for relevant recipes from the Spoonacular API.
2. **Recipe Details**: View the details of a selected recipe, including its image and cooking time.
3. **Favorites Management**: Users can add or remove recipes from their favorites.
4. **Favorites Page**: All saved favorite recipes are accessible from a dedicated page.

## Technologies Used

- **HTML5** for page structure.
- **CSS3** for styling and layout.
- **JavaScript** for handling functionality, API requests, and DOM manipulation.
- **LocalStorage** for storing favorite recipes.
- **Spoonacular API** for fetching recipe data.

## Pages

### 1. `index.html`

The homepage where users can search for recipes based on an ingredient. Recipes are displayed in a grid with:

- **View Details** button to view more information about the recipe.
- **Favorite/Unfavorite** buttons to manage the favorite recipes.

### 2. `recipe.html`

Displays the detailed information of a selected recipe, including the title, image, and cooking time. Users can also manage the favorite status of the recipe.

### 3. `favourites.html`

A dedicated page to display all favorite recipes that the user has saved. Users can also remove recipes from their favorites.

## How It Works

### Searching for Recipes

- On the **index page**, users enter an ingredient in the input field and click the "Find Recipe" button.
- The app sends a request to the Spoonacular API to fetch recipes containing the ingredient.
- Results are displayed as cards with the recipe title, image, and buttons for viewing details or adding/removing from favorites.

### Viewing Recipe Details

- When the **"View Details"** button is clicked on a recipe card, the app redirects to `recipe.html` and shows the recipe's detailed information fetched from the API using the recipe ID.

### Adding/Removing Favorites

- Users can add a recipe to their favorites by clicking the **star (⭐)** icon.
- If the recipe is already a favorite, they can remove it by clicking the **heart-broken (💔)** icon.
- Favorites are stored in the browser's **localStorage** so that they persist across page reloads.

### Favorites Page

- The **Favorites page** (`favourites.html`) lists all recipes that have been favorited by the user.
- Users can view the details of a favorited recipe or remove it from the favorites list.

## API Integration

The app uses the **Spoonacular API** to search for recipes by ingredients. The API endpoint used:

- **Find Recipes by Ingredients**: `https://api.spoonacular.com/recipes/findByIngredients`

Each recipe card is generated dynamically from the API response and includes the title, image, and relevant buttons.

## LocalStorage

Favorites are stored using `localStorage`. This ensures that the list of favorite recipes is persisted even when the user navigates between pages or reloads the app.

## Responsive Design

The app is responsive and adjusts for different screen sizes:

- For small screens, the search input and button are stacked vertically.
- Recipe cards are adjusted to fit mobile layouts.

## How to Run

1. Clone or download the project files.
2. Open `index.html` in a browser to access the main functionality.
3. Use the search bar to find recipes by ingredients.
4. Access the **Favorites** page by navigating to `favourites.html` to view saved recipes.

## Future Improvements

- Add filtering and sorting functionality on the favorites page.
- Improve error handling and UX for invalid inputs or failed API requests.
- Add user authentication to save favorites across devices.
