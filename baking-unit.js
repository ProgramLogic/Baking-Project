document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recipe-form");
    const message = document.getElementById("message");
  
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const ingredients = document.getElementById("ingredients").value.trim();
      const currentUnit = document.getElementById("ingredients").value.trim();
      const conversion = document.getElementById("conversion").value.trim();
      const unitOutput = document.getElementById("unit-output");
  
      
      const conversions = {
        flour: { cup: 120, gram: 120 },   
        water: { cup: 240, ml: 240 },     
        salt: { tsp: 6, gram: 6 },        
        yeast: { tsp: 3, gram: 9 },       
        cinnamon: { tsp: 2.6, gram: 5 },  
        vanilla: { tsp: 4.2, ml: 4.2 }   
      };
  
      
      if (conversions[ingredients] && conversions[ingredients][currentUnit] !== undefined) {
        
        const conversionValue = conversions[ingredients][currentUnit] * conversion;
        unitOutput.value = `Converted Value: ${conversionValue} ${conversion}`;
        message.textContent = "Conversion successful!";
      } else {
        message.textContent = "Invalid ingredient or unit. Please try again.";
      }
    });
  });
  