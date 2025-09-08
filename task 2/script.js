// Get form and input references
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Error spans
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop default form submit
  let isValid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Invalid email";
    isValid = false;
  }

  // Validate password
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password too short";
    isValid = false;
  }

  // If valid
  if (isValid) {
    alert("Form submitted successfully! 🎉");
    form.reset();
  }
});
