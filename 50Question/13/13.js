//13.	 Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

function multiply() {
  performCalculation("*");
}

function divide() {
  performCalculation("/");
}

function performCalculation(operator) {
  // Get user input
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if both numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  // Perform calculation based on the operator
  let result;
  if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      alert("Cannot divide by zero.");
      return;
    }
    result = num1 / num2;
  }

  // Display result
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<p>Result: ${result}</p>`;
}
