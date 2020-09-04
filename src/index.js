const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value
  const newTaskDueDate = document.querySelector("#new-task-due-date").value
  const taskPriority = document.querySelector("#priority")
  const taskPriorityValue = taskPriority.options[taskPriority.selectedIndex].value
  const taskItem = document.createElement('li')
  taskItem.innerText = `${newTask} - Due: ${newTaskDueDate}`
  taskItem.style.color = `${taskPriorityValue}`;
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "X"
  deleteButton.setAttribute('data-action' , 'delete')
  taskItem.appendChild(deleteButton)
  taskList.appendChild(taskItem)
  taskForm.reset() 
})

taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})
const sortBtn = document.createElement('button')
sortBtn.innerText = "sort"
const h2 = document.querySelector('h2')
h2.appendChild(sortBtn)

sortBtn.addEventListener('click', () => {
  // alert("sort list!");
  sortTodos();
})

function sortTodos(){
  const lis = Array.from(document.querySelectorAll('li'))
  .sort((b, a) => a.style.color.localeCompare(b.style.color))
  // console.log(lis)
  lis.forEach(li => {
    taskList.appendChild(li)
    // console.log(li.style.color)
    // console.log(li.textContent)
  })
}
 // taskList.innerHTML += `
  //     <li> ${newTask.fontcolor(taskPriority)} - Due: ${newTaskDueDate}
  //       <button data-action="delete"> X </button>
  //     </li>
  // ` 
  //only successful attempt using .fontcolor()