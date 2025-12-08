function setAlarm() {
    //get elements from the html file
    const input = document.querySelector("#alarmSet"); 
    const heading = document.querySelector("#timeRemaining");
    const pause = document.querySelector("#pause");

    let totalSeconds = parseInt(input.value, 10); //converting the input into number values (input from html file are always strings)
    
    if (isNaN(totalSeconds) || totalSeconds <= 0) {  //check if is not a number and if the number is 0 or less than 0 to return a message for invalid input
      heading.innerText = "Please enter a valid number of seconds";
      return;
    }

    //helper function 
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }

    heading.innerText = `Time Remaining: ${formatTime(totalSeconds)}`; //updating heading

    const timerId = setInterval(() => {  //countdown 
      totalSeconds--; //decrements operator

      heading.innerText = `Time Remaining: ${formatTime(totalSeconds)}`; //updating heading every second after the countdown runs

      if (totalSeconds <= 0) {
        clearInterval(timerId);
        if (typeof playAlarm === "function") { //only runs if playAlarm is a function (safe code)
          playAlarm();
        }
      }
    }, 1000);

    

    

}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseCountDown();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}


window.onload = setup;
