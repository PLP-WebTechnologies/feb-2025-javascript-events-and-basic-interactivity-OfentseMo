// DOM Elements
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formStatus = document.getElementById("form-status");

const changeColorBtn = document.getElementById("change-color-btn");
const toggleTextBtn = document.getElementById("toggle-text-btn");
const toggleText = document.getElementById("toggle-text");

const clickMeBtn = document.getElementById("click-me-btn");
const clickCount = document.getElementById("click-count");

const generateQuoteBtn = document.getElementById("generate-quote-btn");
const randomQuote = document.getElementById("random-quote");

// Constants
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const QUOTES = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do what you can, with what you have, where you are.",
  "It always seems impossible until it's done.",
  "Act as if what you do makes a difference. It does.",
  "You are never too old to set another goal or to dream a new dream.",
];

// Functions
const showError = (element, message) => {
  element.textContent = message;
  element.style.display = "block";
};

const hideError = (element) => {
  element.textContent = "";
  element.style.display = "none";
};

const validateForm = () => {
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameError, "Name is required.");
    isValid = false;
  } else {
    hideError(nameError);
  }

  // Email validation
  if (!EMAIL_REGEX.test(emailInput.value)) {
    showError(emailError, "Invalid email address.");
    isValid = false;
  } else {
    hideError(emailError);
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    showError(passwordError, "Password must be at least 6 characters.");
    isValid = false;
  } else {
    hideError(passwordError);
  }

  return isValid;
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  if (validateForm()) {
    formStatus.textContent = "Form submitted successfully!";
    formStatus.style.color = "var(--success-color)";
    form.reset();
  } else {
    formStatus.textContent = "Please fix the errors above.";
    formStatus.style.color = "var(--error-color)";
  }
};

const changeBackgroundColor = () => {
  const colors = ["#ffcc00", "#00ccff", "#ff6666", "#66ff66"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
};

const toggleTextVisibility = () => {
  toggleText.style.display = toggleText.style.display === "none" ? "block" : "none";
};

let clickCounter = 0;
const handleClickMe = () => {
  clickCounter++;
  clickCount.textContent = clickCounter;
};

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  randomQuote.textContent = QUOTES[randomIndex];
};

// Event Listeners
form.addEventListener("submit", handleFormSubmit);
changeColorBtn.addEventListener("click", changeBackgroundColor);
toggleTextBtn.addEventListener("click", toggleTextVisibility);
clickMeBtn.addEventListener("click", handleClickMe);
generateQuoteBtn.addEventListener("click", generateRandomQuote);