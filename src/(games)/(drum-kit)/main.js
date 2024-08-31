const interactive = () => {
  const drums = document.querySelectorAll(".drum");

  let buttonValue;
  let audio;

  function makeSound(key) {
    switch (key) {
      case "w":
        // to add audio, it should create Audio object and pass the path of audio and the call play() method.
        audio = new Audio("/images/drum/tom-1.mp3");
        audio.play();
        break;
      case "a":
        audio = new Audio("/images/drum/tom-2.mp3");
        audio.play();
        break;
      case "s":
        audio = new Audio("/images/drum/tom-3.mp3");
        audio.play();
        break;
      case "d":
        audio = new Audio("/images/drum/tom-4.mp3");
        audio.play();
        break;
      case "j":
        audio = new Audio("/images/drum/snare.mp3");
        audio.play();
        break;
      case "k":
        audio = new Audio("images/drum/crash.mp3");
        audio.play();
        break;
      case "l":
        audio = new Audio("/images/drum/kick-bass.mp3");
        audio.play();
        break;
      default:
        console.log(buttonValue);
    }
  }

  // apply animation on button usng setTimeout method
  function buttonAnimation(currentKey) {
    var activation = document.querySelector("." + currentKey);
    activation.classList.add("pressed");

    setTimeout(function () {
      activation.classList.remove("pressed");
    }, 100);
  }

  const handleClick = (event) => {
    event.preventDefault();
    let drum = event.target;
    buttonValue = drum.innerHTML;
    makeSound(buttonValue);
    buttonAnimation(buttonValue);
  };

  const handleKeyboard = (event) => {
   
    makeSound(event.key);
    buttonAnimation(event.key);
  };

  // handle click button
  drums.forEach((drum) => {
    drum.addEventListener("click", handleClick);
  });

  // handle keyboard click
    document.addEventListener("keydown", handleKeyboard);

  return () => {
  // clean the event listener
  drums.forEach((drum) => {
    drum.removeEventListener("click", handleClick);
  });

    document.removeEventListener("keydown", handleKeyboard);

 }
};

export default interactive;
