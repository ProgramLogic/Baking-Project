document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recipe-form");
    

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            
            const name = document.getElementById("recipe-name").value.trim();
            const ingredients = document.getElementById("ingredients").value.trim();
            const instructions = document.getElementById("instructions").value.trim();

            if (name && ingredients && instructions) {
                const recipe = {
                    name: name,
                    ingredients: ingredients,
                    instructions: instructions
                };

                
                let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
                recipes.push(recipe); 
                localStorage.setItem("recipes", JSON.stringify(recipes)); 
                
                document.getElementById("message").innerText = "Recipe saved successfully!";
                document.getElementById("message").style.color = "green";

                
                form.reset();
            } else {
                document.getElementById("message").innerText = "Please fill in all fields.";
                document.getElementById("message").style.color = "red";
            }
        });
    }
});
