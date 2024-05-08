let themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");
let calculatorContainer = document.getElementById("calculatorContainer");
let display = document.getElementById("display");
let expression = "";

function toggleTheme() {
  if (themeToggleCheckbox.checked) {
    document.body.style.backgroundColor = "#fff"; /* Light background */
    document.body.style.color = "#000"; /* Black text */
    display.style.backgroundColor = "#f0f0f0"; /* Light gray display */
  } else {
    document.body.style.backgroundColor = "#1a1a1a"; /* Dark background */
    document.body.style.color = "#00ff00"; /* Bright green text */
    display.style.backgroundColor = "#222"; /* Dark display */
  }
}

function appendNumber(num) {
  expression += num;
  display.textContent = expression;
}

function appendOperator(op) {
  if (expression.slice(-1) !== "+" && expression.slice(-1) !== "-" && expression.slice(-1) !== "*" && expression.slice(-1) !== "/") {
    expression += op;
    display.textContent = expression;
  }
}

function appendDecimal(dec) {
  if (!expression.includes(dec)) {
    expression += dec;
    display.textContent = expression;
  }
}

function clearDisplay() {
  expression = "";
  display.textContent = "0";
}

function calculate() {
  try {
    expression = eval(expression).toString();
    display.textContent = expression;
  } catch (error) {
    display.textContent = "Error";
  }
}
