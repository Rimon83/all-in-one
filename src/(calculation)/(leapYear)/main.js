const interactive = () => {
  const yearSelect = document.querySelector("#year");
  const calculate = document.querySelector("#calculate");
  const displayMessage = document.querySelector(".displayMessage");

  let year;

  if (yearSelect) {
    yearSelect.addEventListener("change", () => {
      displayMessage.innerHTML = "";
      year = yearSelect.value;
    });
  }

  // check the year
  function leapYear(year) {
    let message;
    if (year) {
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            message = "leap year.";
          } else {
            message = "not leap year.";
          }
        } else {
          message = "leap year.";
        }
      } else {
        message = "not leap year.";
      }
      displayMessage.innerHTML = `The ${year} is ${message}`;
    } else {
      displayMessage.innerHTML = "Please select a year.";
    }
  }

  const handleButtonClick = (event) => {
    event.preventDefault();

    leapYear(year);
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

//for console
// function leapYear(year) {
//   let message;
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         message = "leap year.";
//       } else {
//         message = "Not leap year.";
//       }
//     } else {
//       message = "leap year.";
//     }
//   } else {
//     message = "Not leap year.";
//   }
//   return message;
// }

// let year = prompt("Enter the year: ");
// leapYear(year);
