// Variables
var startTime, currentTime, elapsedTime, timerInterval;
var lapTimes = [];

// Function to start the timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

// Function to update the timer
function updateTimer() {
  currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var formattedTime = formatTime(elapsedTime);
  document.querySelector(".timer").textContent = formattedTime;
}

// Function to format the time in HH:MM:SS format
function formatTime(time) {
  var milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
  var seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
  var minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
  var hours = ("0" + Math.floor(time / 3600000)).slice(-2);
  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", function () {
  startTimer();
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(timerInterval);
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.querySelector(".timer").textContent = "00:00:00";
});
