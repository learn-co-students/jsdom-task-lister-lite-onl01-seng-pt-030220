// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
// // DOMContentLoaded: 

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
    ` //note, because you are adding user input directly to html, there are security issues with it
    // const taskItem = document.createElement("li")    These three lines do the same thing as the line above
    // taskItem.innerText = newTask
    // taskList.appendChild(taskItem)
    
  taskForm.reset() //clears out form input
})

taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})

////Minimum////
// const list = document.querySelector("#list")
// const taskInput = document.querySelector("#new-task-description")
// const taskForm = document.querySelector("#create-task-form")

// taskForm.addEventListener("submit", function(event) { //callback function
//   event.preventDefault();
//   const taskList = document.querySelector("#tasks")
//   const taskItem = document.createElement('li')
//   taskItem.innerText = taskInput.value

//   taskList.appendChild(taskItem)
//   taskForm.reset()
// })

// const list = document.querySelector("#list")
// const taskInput = document.querySelector("#new-task-description")
// const taskForm = document.querySelector("#create-task-form")

// taskForm.addEventListener("submit", function(event) { //callback function
//   event.preventDefault();
//   const taskList = document.querySelector("#tasks")
//   const taskItem = document.createElement('li')
//   taskItem.innerText = taskInput.value

//   const deleteButton = document.createElement('button')
//   deleteButton.innerText = "delete"
  

//   taskList.appendChild(taskItem)
//   taskItem.appendChild(deleteButton)

//   deleteButton.addEventListener("click", function(event){
//     taskItem.remove();
//   })

//   taskForm.reset()
// })