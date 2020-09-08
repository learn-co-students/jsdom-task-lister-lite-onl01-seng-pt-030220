
const tasksList = document.querySelector("#tasks")
const taskForm = document.querySelector("#create-task-form")

document.addEventListener("DOMContentLoaded", () => {
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTask = document.querySelector("#new-task-description").value
    const taskItem = document.createElement('li')
    taskItem.innerText = `${newTask}`
   

    let button = document.createElement("button");
    button.textContent = " X ";
    button.addEventListener("click", (event) => event.target.parentNode.remove())
    taskItem.appendChild(button)
    tasksList.appendChild(taskItem)
  })
  
});



taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})

