document.addEventListener("DOMContentLoaded", () => {
    const recipesList = document.getElementById("recipes-list");

    let username = localStorage.getItem("username") || prompt("Enter your username to load recipes:");
    if (!username) return alert("No username provided. Unable to load recipes.");
    localStorage.setItem("username", username);

    let recipes = JSON.parse(localStorage.getItem(`recipes_${username}`)) || [];

    if (recipes.length === 0) {
        recipesList.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        recipeDiv.innerHTML = `
            <h2>${recipe.recipeName}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.replaceAll("\n", "<br>")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions.replaceAll("\n", "<br>")}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        recipesList.appendChild(recipeDiv);
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            deleteRecipe(username, index);
        });
    });

    console.log(`Recipes for ${username} loaded successfully.`);
});

function deleteRecipe(username, index) {
    let recipes = JSON.parse(localStorage.getItem(`recipes_${username}`)) || [];
    index = parseInt(index);
    if (index < 0 || index >= recipes.length) {
        console.error("Invalid index for recipe deletion.");
        return;
    }
    recipes.splice(index, 1);
    localStorage.setItem(`recipes_${username}`, JSON.stringify(recipes));
    location.reload();
}
