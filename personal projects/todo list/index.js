var form = document.getElementById("todo-form");
var input = document.getElementById("new-task");
var list = document.getElementById("task-list");

// Function to create a new task item
function createTask(taskText) {
  var li = document.createElement("li");
  li.textContent = taskText;
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(deleteButton);
  list.appendChild(li);
}

// Function to handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var taskText = input.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    input.value = "";
  }
});
