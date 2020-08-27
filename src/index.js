document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");

  const taskUl = document.getElementById("tasks");

  taskForm.addEventListener("submit", createTask);
});

const createTask = event => {
  event.preventDefault();
  const taskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};