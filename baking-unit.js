document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recipe-form");
    const message = document.getElementById("message");
  
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      
      const ingredient = document.getElementById("ingredients").value.trim();
      const currentUnit = document.getElementById("current-unit").value.trim();
      const conversionUnit = document.getElementById("conversion").value.trim();
      const unitOutput = document.getElementById("unit-output");
  
      
      const conversions = {
        flour: { cup: 120, gram: 120 },  
        water: { cup: 240, ml: 240 },    
        salt: { tsp: 6, gram: 6 },       
        yeast: { tsp: 3, gram: 9 },      
        cinnamon: { tsp: 2.6, gram: 5 }, 
        vanilla: { tsp: 4.2, ml: 4.2 }   
      };
  
      
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
  