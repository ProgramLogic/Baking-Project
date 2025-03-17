document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("recipe-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let username = localStorage.getItem("username") || prompt("Enter your username:");
        if (!username) return alert("You must enter a username!");
        localStorage.setItem("username", username);

        let recipes = JSON.parse(localStorage.getItem(`recipes_${username}`)) || [];

        const recipe = {
            recipeName: document.getElementById("recipe-name").value,
            ingredients: document.getElementById("ingredients").value,
            instructions: document.getElementById("instructions").value
        };

        recipes.push(recipe);
        localStorage.setItem(`recipes_${username}`, JSON.stringify(recipes));

        alert("Recipe saved!");
        form.reset();
    });
});
