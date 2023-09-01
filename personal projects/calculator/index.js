function addToDisplay(character) {
  var display = document.getElementById("display");
  display.value += character;
}

function calculate() {
  var display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  var display = document.getElementById("display");
  display.value = "";
}
