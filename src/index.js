document.addEventListener("DOMContentLoaded", () => {
  // your code here
console.log("Hello World")
const taskList = document.getElementById("tasks")
  const form = document.getElementById("create-task-form").addEventListener("submit", function(e) {
    e.preventDefault();
   const newTask = document.querySelector("#new-task-description").value
    console.log(newTask)

    li = document.createElement('li')
    li.innerText = newTask
    taskList.appendChild(li)
  })
});
