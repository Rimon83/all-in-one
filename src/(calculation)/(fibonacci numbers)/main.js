const interactive = () => {
  const sequenceInput = document.querySelector("#sequence");
  const calculate = document.querySelector("#calculate");
  const displayMessage = document.querySelector(".displayMessage");
  let sequence;

  if (sequenceInput) {
    sequenceInput.addEventListener("input", () => {
      sequence = sequenceInput.value;
    });
  }

  // generate the fibonacci
  function fibonacciGenerator(number) {
    var output = [];
    var sum = 0;
    let result = "";
    if (number) {
      for (var i = 0; i < number; i++) {
        if (output.length >= 2) {
          sum = output[i - 1] + output[i - 2];
          //sum = output[output.length-1] + output[output.length-2];
          output.push(sum);
        } else {
          output.push(i);
        }
      }
      output.forEach((num) => {
        result += num + "  ";
      });
      displayMessage.innerHTML = `<h4>The Fibonacci is <span>${result}</span></h4>`;
      const displayMessageSpan = document.querySelector(".displayMessage span");
      displayMessageSpan.classList.add("highlight");
    } else {
      displayMessage.innerHTML = "Please enter the number";
    }
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    fibonacciGenerator(sequence);
  };

  if (calculate) {
    calculate.addEventListener("click", handleButtonClick);
  }

  // Cleanup function to remove event listeners
  return () => {
    calculate.removeEventListener("click", handleButtonClick);
  };
};

export default interactive;

// for console

// function fibonacciGenerator(n) {
//   var output = [];
//   var sum = 0;
//   for (var i = 0; i < n; i++) {
//     if (output.length >= 2) {
//       sum = output[i - 1] + output[i - 2];
//       //sum = output[output.length-1] + output[output.length-2];
//       output.push(sum);
//     } else {
//       output.push(i);
//     }
//   }
//   return output;
// }

// console.log(fibonacciGenerator(10));
