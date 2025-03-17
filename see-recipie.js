// see-recipe.js

document.addEventListener("DOMContentLoaded", () => {
    const recipesList = document.getElementById("recipes-list");
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    if (recipes.length === 0) {
        recipesList.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        recipeDiv.innerHTML = `
            <h2>${recipe.recipeName}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.replace(/\n/g, "<br>")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions.replace(/\n/g, "<br>")}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;

        recipesList.appendChild(recipeDiv);
    });
});

function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    location.reload();
}
