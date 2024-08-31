const interactive = () => {
  const display = document.getElementById("display");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  let firstNumber = "";
  let secondNumber = "";
  let operator = "";
  let resultDisplayed = false;

  const handleNumberClick = (num) => {
    if (display.value === "0" || resultDisplayed) {
      display.value = num;
      resultDisplayed = false;
    } else {
      display.value += num;
    }
  };

  const handleOperatorClick = (op) => {
    if (op === "C") {
      resetCalculator();
    } else if (op === "=") {
      if (operator && firstNumber !== "") {
        secondNumber = display.value;
        display.value = calculate(firstNumber, secondNumber, operator);
        firstNumber = display.value;
        resultDisplayed = true;
        operator = "";
      }
    } else {
      if (operator && firstNumber !== "" && !resultDisplayed) {
        secondNumber = display.value;
        display.value = calculate(firstNumber, secondNumber, operator);
        firstNumber = display.value;
        resultDisplayed = true;
      } else if (!resultDisplayed) {
        firstNumber = display.value;
      }
      operator = op;
      resultDisplayed = true; // This ensures that clicking the operator again doesn't reapply the operation
    }
  };

  const calculate = (num1, num2, op) => {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    return result;
  };

  const resetCalculator = () => {
    display.value = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    resultDisplayed = false;
  };

  // Add event listeners to the buttons
  numberButtons.forEach((button) => {
    button.addEventListener("click", handleNumberClickEvent);
  });

  operatorButtons.forEach((button) => {
    button.addEventListener("click", handleOperatorClickEvent);
  });

  function handleNumberClickEvent(e) {
    handleNumberClick(e.target.dataset.number);
  }

  function handleOperatorClickEvent(e) {
    handleOperatorClick(e.target.dataset.operator);
  }

  // Return a cleanup function that will remove the event listeners when the component unmounts
  return () => {
    numberButtons.forEach((button) => {
      button.removeEventListener("click", handleNumberClickEvent);
    });

    operatorButtons.forEach((button) => {
      button.removeEventListener("click", handleOperatorClickEvent);
    });
  };
};

export default interactive;
