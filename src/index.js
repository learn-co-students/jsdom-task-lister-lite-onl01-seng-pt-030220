document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let addButtonForm = document.querySelector("#create-task-form")
  let ulTasks = document.querySelector("#tasks")
  
//currently addButton() not functionn
  function addButton(){
    const button = document.createElement("button")
    button.innerText = "x"
    button.addEventListener("click", (e) => {
      e.target.remove()
    })
  }
  
  ulTasks.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.tagName === "BUTTON"){
      //console.log("test")
      console.log(e.target.tagName)
      e.target.parentElement.remove()
    }
  })


  function addText(text){
    const li = document.createElement("li")
    li.innerText = text
    li.innerHTML += `<button data-description="delete">X</button>`
    ulTasks.appendChild(li)
  }

  addButtonForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addText(e.target["new-task-description"].value);

    //document.querySelector("#create-task-form")["new-task-description"].value
    addButtonForm.reset()

  })
  
});
