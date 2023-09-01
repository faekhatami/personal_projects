// JavaScript (quiz.js)
const options = document.querySelectorAll('input[type="radio"]');
const result = document.querySelector(".result");
const scoreElement = document.getElementById("score");
let score = 0;

options.forEach((option) => {
  option.addEventListener("click", checkAnswer);
});

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="q1"]:checked');
  if (selectedOption && selectedOption.value === "a") {
    result.textContent = "Correct!";
    score++;
  } else {
    result.textContent = "Wrong!";
  }
  scoreElement.textContent = score;
}
