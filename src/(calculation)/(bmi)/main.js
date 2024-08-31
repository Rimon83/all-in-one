const interactive = () => {

const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const displayMessage = document.querySelector(".displayMessage");


const inputValues = {
 weight: "",
 height: ""
}

if (weightInput){
 weightInput.addEventListener("input", () => {
  displayMessage.innerHTML = "";
  inputValues.weight = parseFloat(weightInput.value)
 })
}

if (heightInput){
 heightInput.addEventListener("input", () => {
  displayMessage.innerHTML = "";
  inputValues.height = parseFloat(heightInput.value)
 })
}

// calculation
 function bmiCalculator(weight, height) {
   let message;
   if (weight && height) {

     // Corrected BMI calculation with floating-point precision
     let bmi = (weight / Math.pow(height, 2)).toFixed(2);

     // Creating appropriate messages based on BMI value
     if (bmi < 18.5) {
       message = `Your BMI is <span>${bmi}</span>, so you are underweight.`;
     } else if (bmi >= 18.5 && bmi <= 24.9) {
       message = `Your BMI is <span>${bmi}</span>, so you have a normal weight.`;
     } else if (bmi > 24.9) {
       message = `Your BMI is <span>${bmi}</span>, so you are overweight.`;
     }

     // Displaying the message
     displayMessage.innerHTML = `<h4>${message}</h4>`;
     const spanMessage = document.querySelectorAll(".displayMessage span");
     spanMessage.forEach((span) => {
       span.classList.add("highlight");
     });
   } else {
     displayMessage.innerHTML = `<h4>The weight or height value is missing</h4>`;
   }
 }


  const handleButtonClick = (event) => {
    event.preventDefault();
   
    bmiCalculator(inputValues.weight, inputValues.height)
  };

  if (calculate) {
    calculate.addEventListener("click", handleButtonClick);
  }

  // Cleanup function to remove event listeners
  return () => {
    calculate.removeEventListener("click", handleButtonClick);
  };
}

export default interactive



// foe console
// function bmiCalculator(weight, height) {
//   let message;
//   let bmi = Math.round(weight / Math.pow(height, 2));

//   if (bmi < 18.5) {
//     message = "Your BMI is " + bmi + ", so you are underweight.";
//   }
//   if (bmi >= 18.5 && bmi <= 24.9) {
//     message = "Your BMI is " + bmi + ", so you have a normal weight.";
//   }
//   if (bmi > 24.9) {
//     message = "Your BMI is " + bmi + ", so you are overweight.";
//   }
//   return message;
// }

// let weight = prompt("Enter your weight: in kg");
// let height = prompt("Enter your height: in m");

// alert(bmiCalculator(94, 1.83));