// Get the modal and button elements
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Open the modal when the "Make Recipe" button is clicked
btn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the "X" is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById("recipeForm").onsubmit = function(e) {
  e.preventDefault(); // Prevent page reload
  
  var title = document.getElementById("recipeTitle").value;
  var ingredients = document.getElementById("ingredients").value;
  var instructions = document.getElementById("instructions").value;

  console.log("Recipe Title: " + title);
  console.log("Ingredients: " + ingredients);
  console.log("Instructions: " + instructions);

  // You can store the recipe or display it somewhere
  modal.style.display = "none"; // Close modal after submission
}
