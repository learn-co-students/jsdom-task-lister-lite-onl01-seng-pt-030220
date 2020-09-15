document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main-content")
  console.log(main)

  const taskForm = document.getElementById("create-task-form")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    
    // get user input
    const newTask = document.querySelector("#new-task-description").value
    
    //put it on the document

    // const taskItem = document.createElement("li")
    // taskItem.innerText = newTask
    // taskList.appendChild(taskItem)
    taskList.innerHTML += `<li> ${newTask} <button data-action="delete">delete</button> </li>`

    taskForm.reset()
  })

  taskList.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })
});


// function addingEventListener() {
//   const input = document.getElementById('input');
//   input.addEventListener('click', function(event) {
//   alert('I was clicked!');
// });
// }