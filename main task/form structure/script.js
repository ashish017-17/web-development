const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop default submit
  alert("Form submitted successfully! 🎉");
});
