/* Modal? 
on click somehow show filled in input field with the value of the input 
they can change and submit it 
and it updates that li inner text
*/ 


const form = document.querySelector("#create-task-form"); 
const userInput = document.querySelector('#new-task-description'); 
const dueDateInput = document.querySelector('#new-task-duedate')
const ul = document.querySelector('#tasks'); 
const priority = document.querySelector('#priority')


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let li = document.createElement('li');
  li.innerText = `${userInput.value} Due Date: ${dueDateInput.value}`; 
  li.style.color = priority.value;
  let button = document.createElement('button');
  button.innerText = 'x'
  li.appendChild(button);
  let editBtn = document.createElement('button'); 
  editBtn.setAttribute('id', 'edit')
  editBtn.innerText = "Edit"
  li.appendChild(editBtn)
  deleteTask(button);
  // editTask(editBtn);
  ul.appendChild(li);
  form.reset(); 
})
// function editTask(editBtn){
//   editBtn.addEventListener('click', (e) =>{
//     alert("Edit!");
//   })
  
// }

function deleteTask(button){
  button.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  })
}

const h2 = document.querySelector("h2")
const sortButton = document.createElement('button');
sortButton.innerText = "Sort"
h2.appendChild(sortButton); 

sortButton.addEventListener('click', () => {
  sortByPriority(); 
})


function sortByPriority(){
  const arr = Array.from(ul.getElementsByTagName("LI"))
    .sort((b, a) => a.style.color.localeCompare(b.style.color))
    arr.forEach(li => ul.appendChild(li));
}

























// const taskForm = document.querySelector("#create-task-form")
// const taskList = document.querySelector("#tasks")

// taskForm.addEventListener("submit", function(e) {
//   e.preventDefault()
//   // have the user input
//   const newTask = document.querySelector("#new-task-description").value
//   const newTaskDueDate = document.querySelector("#new-task-due-date").value
//   const taskPriority = document.querySelector("#priority").value
//   // slap it on the DOM 
//   // where? 
//   taskList.innerHTML += `
//       <li> ${newTask.fontcolor(taskPriority)} - Due: ${newTaskDueDate}
//         <button data-action="delete"> X </button>
//       </li>
//    `
    
//   taskForm.reset() 
// })

// taskList.addEventListener("click", function(e) {
//   if (e.target.dataset.action === "delete") {
//     e.target.parentElement.remove()
//   }
// })
