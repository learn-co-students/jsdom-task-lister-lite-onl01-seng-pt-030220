const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  // have the user input
  const newTask = document.querySelector("#new-task-description").value
  const newTaskDueDate = document.querySelector("#new-task-due-date").value
  const taskPriority = document.querySelector("#priority").value
  // slap it on the DOM 
  // where? 
  taskList.innerHTML += `
      <li> ${newTask.fontcolor(taskPriority)} - Due: ${newTaskDueDate}
        <button data-action="delete"> X </button>
      </li>
   `
    
  taskForm.reset() 
})

taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})

