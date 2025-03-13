document.addEventListener("DOMContentLoaded", function () {
    const recipesList = document.getElementById("recipes-list");
    if (!recipesList) {
        console.error("Element #recipes-list not found.");
        return;
    }
    openDatabase();
});

// Open IndexedDB Database
function openDatabase() {
    const request = indexedDB.open("MyDatabase", 1);

    request.onupgradeneeded = function (event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("recipes")) {
            db.createObjectStore("recipes", { keyPath: "id", autoIncrement: true });
        }
    };

    request.onsuccess = function (event) {
        console.log("Database opened successfully!");
        renderRecipes();
    };

    request.onerror = function (event) {
        console.error("Database error:", event.target.errorCode);
    };
}

// Function to render recipes from IndexedDB
function renderRecipes() {
    const recipesList = document.getElementById("recipes-list");
    if (!recipesList) return;
    recipesList.innerHTML = "";

    const request = indexedDB.open("MyDatabase", 1);
    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("recipes", "readonly");
        const store = transaction.objectStore("recipes");
        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = function () {
            const recipes = getAllRequest.result;
            if (recipes.length === 0) {
                recipesList.innerHTML = "<p>No recipes found.</p>";
                return;
            }

            recipes.forEach((recipe) => {
                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("recipe");
                recipeDiv.innerHTML = `
                    <h2>${recipe.name}</h2>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    <button class="delete-btn" data-id="${recipe.id}">Delete</button>
                `;
                recipesList.appendChild(recipeDiv);
            });
            attachDeleteEventListeners();
        };
    };
}

// Function to attach delete event listeners
function attachDeleteEventListeners() {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            let id = parseInt(this.getAttribute("data-id"), 10);
            deleteRecipe(id);
        });
    });
}

// Function to delete a recipe
function deleteRecipe(id) {
    const request = indexedDB.open("MyDatabase", 1);
    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("recipes", "readwrite");
        const store = transaction.objectStore("recipes");
        store.delete(id);
        transaction.oncomplete = function () {
            renderRecipes();
        };
    };
}