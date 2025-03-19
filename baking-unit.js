document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recipe-form");
    const message = document.getElementById("message");
  
    // Event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get user input values
      const ingredient = document.getElementById("ingredients").value.trim();
      const currentUnit = document.getElementById("current-unit").value.trim();
      const conversionUnit = document.getElementById("conversion").value.trim();
      const unitOutput = document.getElementById("unit-output");
  
      // Example ingredient conversions (you can add more)
      const conversions = {
        flour: { cup: 120, gram: 120 },  // 1 cup of flour = 120 grams
        water: { cup: 240, ml: 240 },    // 1 cup of water = 240 ml
        salt: { tsp: 6, gram: 6 },       // 1 tsp salt = 6 grams
        yeast: { tsp: 3, gram: 9 },      // 1 tsp of yeast = 3 grams
        cinnamon: { tsp: 2.6, gram: 5 }, // 1 tsp of cinnamon = 2.6 grams
        vanilla: { tsp: 4.2, ml: 4.2 }   // 1 tsp of vanilla = 4.2 ml
      };
  
      // Check if ingredient and conversion are valid
      if (conversions[ingredient] && conversions[ingredient][currentUnit] !== undefined) {
        const conversionRate = conversions[ingredient][currentUnit];
        const conversionValue = conversionRate * parseFloat(conversionUnit);
        unitOutput.value = `Converted Value: ${conversionValue} ${conversionUnit}`;
        message.textContent = "Conversion successful!";
      } else {
        message.textContent = "Invalid ingredient or unit. Please try again.";
      }
    });
  });
  