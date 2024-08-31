const interactive = () => {
  const ageInput = document.querySelector("#age");
  const ageReachInput = document.querySelector("#ageReach");
  const calculate = document.querySelector("#calculate");
  const displayMessage = document.querySelector(".displayMessage");
 

  // Global object to store the values
  let inputValues = {
    age: "",
    ageReach: "",
  };

  // Event listener for age input
  if (ageInput) {
    ageInput.addEventListener("input", () => {
      displayMessage.innerHTML = "";
      inputValues.age = ageInput.value;
    });
  }

  // Event listener for age reach input
  if (ageReachInput) {
    displayMessage.innerHTML = "";
    ageReachInput.addEventListener("input", () => {
      inputValues.ageReach = ageReachInput.value;
    });
  }

  // calculation
  function lifeInWeeks(age, reachedAge) {
    let remainYear = reachedAge - age;
    let remainDay = remainYear * 365;
    let remainWeek = remainYear * 52;
    let remainMonth = remainYear * 12;

    displayMessage.innerHTML = `<h4>You have <span>${remainDay}</span> days, <span>${remainWeek}</span> weeks, and <span>${remainMonth}</span> months left.</h4>`;

     const spanMessage = document.querySelectorAll(".displayMessage span");
    spanMessage.forEach((span) => {
      span.classList.add("highlight");
    });
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    lifeInWeeks(inputValues.age, inputValues.ageReach);
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
  // function lifeInWeeks(age, reachedAge) {
  //   let remainYear = reachedAge - age;
  //   let remainDay = remainYear * 365;
  //   let remainWeek = remainYear * 52;
  //   let remainMonth = remainYear * 12;

  //   alert(
  //     "You have " +
  //       remainDay +
  //       " days, " +
  //       remainWeek +
  //       " weeks, and " +
  //       remainMonth +
  //       " months left."
  //   );
  // }

  // let age = prompt("Enter your age: ");
  // let reachedAge = prompt("Enter the age that you want to reach: ");
  // lifeInWeeks(age, reachedAge);