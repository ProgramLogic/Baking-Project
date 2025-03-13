document.addEventListener("DOMContentLoaded", function () {
    const recipesList = document.getElementById("recipes-list");

    if (!recipesList) {
        console.error("Element #recipes-list not found.");
        return; 
    }

    renderRecipes();
});

// Function to render recipes from localStorage
function renderRecipes() {
    const recipesList = document.getElementById("recipes-list");
    if (!recipesList) return;

    recipesList.innerHTML = ""; // Clear current list
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    if (recipes.length === 0) {
        recipesList.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        recipeDiv.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        recipesList.appendChild(recipeDiv);
    });

    attachDeleteEventListeners(); // Attach event listeners to delete buttons
}

// Function to attach delete event listeners
function attachDeleteEventListeners() {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            let index = parseInt(this.getAttribute("data-index"), 10);
            deleteRecipe(index);
        });
    });
}

// Function to delete a recipe
function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        renderRecipes(); // Refresh the list dynamically
    }
}
