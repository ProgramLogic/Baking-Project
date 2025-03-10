// Open modals
function openCreateRecipeModal() {
    document.getElementById("createRecipeModal").style.display = "block";
}

function openViewRecipesModal() {
    document.getElementById("viewRecipesModal").style.display = "block";
    displayRecipes();
}

function openDeleteRecipeModal() {
    document.getElementById("deleteRecipeModal").style.display = "block";
}

// Close modals
function closeCreateRecipeModal() {
    document.getElementById("createRecipeModal").style.display = "none";
}

function closeViewRecipesModal() {
    document.getElementById("viewRecipesModal").style.display = "none";
}

function closeDeleteRecipeModal() {
    document.getElementById("deleteRecipeModal").style.display = "none";
}

// Create recipe and store it in localStorage
function saveRecipe() {
    const recipeName = document.getElementById("recipeName").value;
    const recipeInstructions = document.getElementById("recipeInstructions").value;

    if (recipeName && recipeInstructions) {
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push({ name: recipeName, instructions: recipeInstructions });
        localStorage.setItem("recipes", JSON.stringify(recipes));
        alert("Recipe saved!");
        closeCreateRecipeModal();
    } else {
        alert("Please provide both a recipe name and instructions.");
    }
}

// Display all recipes from localStorage
function displayRecipes() {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const recipesList = document.getElementById("recipesList");
    recipesList.innerHTML = ""; // Clear the list

    if (recipes.length === 0) {
        recipesList.innerHTML = "<p>No recipes found.</p>";
    } else {
        recipes.forEach((recipe) => {
            const recipeElement = document.createElement("div");
            recipeElement.innerHTML = `<strong>${recipe.name}</strong>: ${recipe.instructions}`;
            recipesList.appendChild(recipeElement);
        });
    }
}

// Delete a recipe from localStorage
function deleteRecipe() {
    const recipeNameToDelete = document.getElementById("deleteRecipeName").value;

    if (recipeNameToDelete) {
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        const filteredRecipes = recipes.filter(recipe => recipe.name !== recipeNameToDelete);

        if (recipes.length === filteredRecipes.length) {
            alert("Recipe not found.");
        } else {
            localStorage.setItem("recipes", JSON.stringify(filteredRecipes));
            alert("Recipe deleted!");
        }
        closeDeleteRecipeModal();
    } else {
        alert("Please provide a recipe name to delete.");
    }
}
