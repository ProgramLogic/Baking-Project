document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recipe-form");
    

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevents the page from refreshing

            // Get form values
            const name = document.getElementById("recipe-name").value.trim();
            const ingredients = document.getElementById("ingredients").value.trim();
            const instructions = document.getElementById("instructions").value.trim();

            if (name && ingredients && instructions) {
                const recipe = {
                    name: name,
                    ingredients: ingredients,
                    instructions: instructions
                };

                // Retrieve existing recipes from localStorage or create an empty array
                let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
                recipes.push(recipe); // Add new recipe
                localStorage.setItem("recipes", JSON.stringify(recipes)); // Save back to localStorage

                // Show success message
                document.getElementById("message").innerText = "Recipe saved successfully!";
                document.getElementById("message").style.color = "green";

                // Clear the form
                form.reset();
            } else {
                document.getElementById("message").innerText = "Please fill in all fields.";
                document.getElementById("message").style.color = "red";
            }
        });
    }
});
