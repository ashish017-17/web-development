const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");

// Toggle password visibility
showPasswordCheckbox.addEventListener("change", () => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text"; // Show password
  } else {
    passwordInput.type = "password"; // Hide password
  }
});
