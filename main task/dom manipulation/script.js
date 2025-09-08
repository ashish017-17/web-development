const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const showPasswordCheckbox = document.getElementById("showPassword");
const aboutInput = document.getElementById("about");
const charCount = document.getElementById("charCount");
const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const summaryDiv = document.getElementById("summary");

// Error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Live Validation
function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    nameInput.classList.add("invalid");
    return false;
  }
  nameError.textContent = "";
  nameInput.classList.remove("invalid");
  return true;
}

function validateEmail() {
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailError.textContent = "Invalid email";
    emailInput.classList.add("invalid");
    return false;
  }
  emailError.textContent = "";
  emailInput.classList.remove("invalid");
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    passwordInput.classList.add("invalid");
    return false;
  }
  passwordError.textContent = "";
  passwordInput.classList.remove("invalid");
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordInput.classList.add("invalid");
    return false;
  }
  confirmPasswordError.textContent = "";
  confirmPasswordInput.classList.remove("invalid");
  return true;
}

// Show/Hide Password
showPasswordCheckbox.addEventListener("change", () => {
  const type = showPasswordCheckbox.checked ? "text" : "password";
  passwordInput.type = type;
  confirmPasswordInput.type = type;
});

// Character Counter
aboutInput.addEventListener("input", () => {
  const remaining = 200 - aboutInput.value.length;
  charCount.textContent = `${remaining} characters remaining`;
});

// Dynamic Country → State Dropdown
const states = {
  India: ["Punjab", "Delhi", "Maharashtra", "Karnataka"],
  USA: ["New York", "California", "Texas", "Florida"]
};

countrySelect.addEventListener("change", () => {
  stateSelect.innerHTML = `<option value="">-- Select State --</option>`;
  if (states[countrySelect.value]) {
    states[countrySelect.value].forEach(st => {
      let option = document.createElement("option");
      option.value = st;
      option.textContent = st;
      stateSelect.appendChild(option);
    });
  }
});

// Live validation events
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

// Submit + Summary
form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!(validateName() && validateEmail() && validatePassword() && validateConfirmPassword())) {
    return;
  }

  // Collect data
  let gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
  let skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value)
    .join(", ") || "None";
  
  let summary = `
    <h3>📋 Form Summary</h3>
    <p><b>Name:</b> ${nameInput.value}</p>
    <p><b>Email:</b> ${emailInput.value}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Skills:</b> ${skills}</p>
    <p><b>Country:</b> ${countrySelect.value || "Not selected"}</p>
    <p><b>State:</b> ${stateSelect.value || "Not selected"}</p>
    <p><b>About You:</b> ${aboutInput.value || "N/A"}</p>
  `;

  summaryDiv.innerHTML = summary;
  summaryDiv.style.display = "block";
});
