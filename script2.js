document.addEventListener('DOMContentLoaded', function () {
    // Get the form and message elements
    const recipeForm = document.getElementById('recipe-form');
    const messageElement = document.getElementById('message');

    // Get saved recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Handle form submission
    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get form values
        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        // Create a new recipe object
        const newRecipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };

        // Add the new recipe to the array of recipes
        recipes.push(newRecipe);

        // Save the updated recipes list to localStorage
        localStorage.setItem('recipes', JSON.stringify(recipes));

        // Display a success message
        messageElement.textContent = 'Recipe saved successfully!';

        // Clear form inputs
        recipeForm.reset();
    });
});
