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
  // slap it on the DOM 
  // where? 
  taskList.innerHTML += `
      <li> ${newTask}
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