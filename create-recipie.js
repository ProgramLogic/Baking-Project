document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("recipe-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const recipeName = document.getElementById("recipe-name").value;
        const ingredients = document.getElementById("ingredients").value;
        const instructions = document.getElementById("instructions").value;

        if (!recipeName || !ingredients || !instructions) {
            message.textContent = "Please fill in all fields.";
            return;
        }

        const recipe = { recipeName, ingredients, instructions };
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(recipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));

        message.textContent = "Recipe saved successfully!";
        form.reset();
    });
});