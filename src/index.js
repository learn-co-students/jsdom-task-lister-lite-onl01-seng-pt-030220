const form = document.getElementById("create-task-form")

function print(){
  const task = document.getElementById("new-task-description").value
  let newTask = document.getElementById("tasks")
  newTask.innerHTML = `<li>${task}</li>`
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
  event.preventDefault();
  print(event.target["new-task-description"].value);
  }, false);
});


console.log(task)