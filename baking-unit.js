document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recipe-form");
  const message = document.getElementById("message");
  const unitOutput = document.getElementById("unit-output");

  // Ingredient conversions (added more units)
  const conversions = {
    flour: {
      cup: 120, // 1 cup = 120 grams
      gram: 120, // 1 gram = 1 gram
      oz: 4.2, // 1 oz = 4.2 grams
      tbsp: 8, // 1 tbsp = 8 grams
      tsp: 2.67, // 1 tsp = 2.67 grams
    },
    water: {
      cup: 240, // 1 cup = 240 ml
      ml: 240, // 1 ml = 1 ml
      oz: 8, // 1 oz = 30 ml
      tbsp: 15, // 1 tbsp = 15 ml
      tsp: 5, // 1 tsp = 5 ml
    },
    salt: {
      tsp: 6, // 1 tsp = 6 grams
      gram: 6, // 1 gram = 1 gram
      oz: 0.21, // 1 oz = 6 grams
      tbsp: 18, // 1 tbsp = 18 grams
      cup: 144, // 1 cup = 144 grams
    },
    yeast: {
      tsp: 3, // 1 tsp = 3 grams
      gram: 3, // 1 gram = 1 gram
      tbsp: 9, // 1 tbsp = 9 grams
      oz: 0.11, // 1 oz = 3 grams
      cup: 96, // 1 cup = 96 grams
    },
    cinnamon: {
      tsp: 2.6, // 1 tsp = 2.6 grams
      gram: 2.6, // 1 gram = 1 gram
      tbsp: 7.8, // 1 tbsp = 7.8 grams
      oz: 0.09, // 1 oz = 2.6 grams
      cup: 78, // 1 cup = 78 grams
    },
    vanilla: {
      tsp: 4.2, // 1 tsp = 4.2 ml
      ml: 4.2, // 1 ml = 1 ml
      tbsp: 12.6, // 1 tbsp = 12.6 ml
      oz: 0.14, // 1 oz = 4.2 ml
      cup: 50, // 1 cup = 50 ml
    },
    sugar: {
      cup: 200, // 1 cup = 200 grams
      gram: 200, // 1 gram = 1 gram
      oz: 7.05, // 1 oz = 28.35 grams
      tbsp: 12.5, // 1 tbsp = 12.5 grams
      tsp: 4.17, // 1 tsp = 4.17 grams
    }
  };

  // Form submission event handler
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const ingredient = document.getElementById("ingredients").value.trim().toLowerCase();
    const currentUnit = document.getElementById("current-unit").value.trim().toLowerCase();
    const conversionUnit = document.getElementById("conversion").value.trim().toLowerCase();

    // Check if the ingredient and units are valid
    if (conversions[ingredient] && conversions[ingredient][currentUnit] && conversions[ingredient][conversionUnit]) {
      const conversionRate = conversions[ingredient][currentUnit];
      const convertedValue = conversionRate * parseFloat(conversionUnit); // Calculate conversion

      // Show the converted result in the unit-output field
      unitOutput.value = `Converted Value: ${convertedValue} ${conversionUnit}`;
      message.textContent = "Conversion successful!";
    } else {
      unitOutput.value = ""; // Clear output if invalid
      message.textContent = "Invalid ingredient or unit. Please try again.";
    }
  });
});
