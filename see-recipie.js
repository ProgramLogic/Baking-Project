document.addEventListener('DOMContentLoaded', function () {
    // Get the list of saved recipes from localStorage or initialize an empty array
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Function to display the recipes in the recipes list
    function displayRecipes() {
        const recipesList = document.getElementById('recipes-list');
        recipesList.innerHTML = ''; // Clear the list before displaying updated recipes

        // Check if there are any recipes in the array
        if (recipes.length > 0) {
            recipes.forEach((recipe, index) => {
                const recipeElement = document.createElement('div');
                recipeElement.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <button class="delete-recipe" data-index="${index}">Delete</button>
                `;
                recipesList.appendChild(recipeElement);
            });
        } else {
            recipesList.innerHTML = '<p>No recipes saved yet.</p>';
        }
    }

    // Event listener for delete buttons to remove a recipe
    document.getElementById('recipes-list').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-recipe')) {
            const index = event.target.getAttribute('data-index');
            recipes.splice(index, 1); // Remove the recipe from the array
            localStorage.setItem('recipes', JSON.stringify(recipes)); // Update localStorage
            displayRecipes(); // Re-render the recipe list
        }
    });

    // Function to add a new recipe to the list and store it in localStorage
    function addRecipe(name, description) {
        recipes.push({ name, description });
        localStorage.setItem('recipes', JSON.stringify(recipes));
        displayRecipes(); // Re-render the updated list
    }

    // Example of adding a new recipe (you can trigger this with a form or other action)
    addRecipe('Spaghetti Bolognese', 'A classic Italian pasta dish with rich tomato and meat sauce.');

    // Display recipes after loading
    displayRecipes();
});
