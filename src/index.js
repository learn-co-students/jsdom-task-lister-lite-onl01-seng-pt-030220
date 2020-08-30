document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(e) {
    e.preventDefault()
    const text = document.getElementById("new-task-description").value  // text entered
    const task = document.createElement("li")
    task.innerText = text + " "
    task.id = text
    document.getElementById("list").appendChild(task)  //list node
    const priority = document.getElementById("priority")
    if (priority.value == 1) {
      task.style.color = "red"
    } else if (priority.value == 2) {
      task.style.color = "yellow"
    } else if (priority.value == 3) {
      task.style.color = "green"
    }

    function createDeleteButton(){
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.id = text
    task.appendChild(deleteButton)
    deleteButton.addEventListener("click", function(e) {
      deleteButton.parentElement.remove()
    });
    }

    
    
    function createEditButton() {
      const editButton = document.createElement("button")
      editButton.innerText = "Edit"
      task.appendChild(editButton)
      editButton.addEventListener("click", function(e) {
        const form = document.createElement("form")
        form.setAttribute("method", "post"); 
        form.setAttribute("action", "submit.php"); 
        const input = document.createElement("input")
        input.setAttribute("type", "text"); 
        input.setAttribute("name", "task"); 
        input.setAttribute("id", "task");
        input.setAttribute("placeholder", `Change your Task`);
        const select = document.createElement("select")
        select.setAttribute("name", "priority-select")
        select.setAttribute("id", "priority-select")
        const option1 = document.createElement("option")
        option1.setAttribute("value", "1")
        option1.innerText = "1"
        select.appendChild(option1)
        const option2 = document.createElement("option")
        option2.setAttribute("value", "2")
        option2.innerText = "2"
        select.appendChild(option2)
        const option3 = document.createElement("option")
        option3.setAttribute("value", "3")
        option3.innerText = "3"
        select.appendChild(option3)
        const submit = document.createElement("input") 
        submit.setAttribute("type", "submit"); 
        submit.setAttribute("value", "Change Task"); 
        form.appendChild(input)
        form.appendChild(select)
        form.appendChild(submit)
        editButton.parentNode.appendChild(form)
        submit.addEventListener("click", function(e) {
          e.preventDefault()
          const prioritySelect = document.getElementById("priority-select")
          if (prioritySelect.value == 1) {
            editButton.parentElement.style.color = "red"
          } else if (prioritySelect.value == 2) {
            editButton.parentElement.style.color = "yellow"
          } else if (prioritySelect.value == 3) {
            editButton.parentElement.style.color = "green"
          }
          const editText = document.getElementById("task").value
          editButton.parentElement.innerText = editText +" "
          
          createEditButton()
          createDeleteButton()
        })
      })
    }
    createEditButton()
    createDeleteButton()
  });

});
