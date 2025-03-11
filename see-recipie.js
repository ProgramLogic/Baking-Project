document.addEventListener("DOMContentLoaded", function() {
    const recipesList = document.getElementById("recipes-list");

    // Retrieve stored recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    if (recipes.length === 0) {
        recipesList.innerHTML = "<p>No recipes found.</p>";
    } else {
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

        // Add event listeners to delete buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function() {
                let index = this.getAttribute("data-index");
                deleteRecipe(index);
            });
        });
    }
});

function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    
    if (recipes.length > index) {
        recipes.splice(index, 1); // Remove selected recipe
        localStorage.setItem("recipes", JSON.stringify(recipes)); // Update storage
        location.reload(); // Refresh page to update UI
    }
}
