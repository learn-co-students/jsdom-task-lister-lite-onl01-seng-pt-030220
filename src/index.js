document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
        let input = document.querySelector("input#new-task-description")
        let ul = document.querySelector("ul#tasks")
        console.log(input)

        // Gets the input value
        let text = document.createElement("text")
        text.textContent = input.value
        console.log(text)
 
        let button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", (event) => event.target.parentNode.remove());

        //button.edit
        let editButton=document.createElement("button");//edit button
        editButton.textContent = "Edit";
        editButton.className = "editMode"
        editButton.addEventListener("click", (event) => {
          var listItem = event.target.parentNode;
          var containsClass = listItem.classList.contains("editMode");
          // console.log(containsClass)
          //If class of the parent is .editmode
          if(containsClass){
  
          //switch to .editmode
          //label becomes the inputs value.
            let editInput = document.querySelector("input.editInput")
            text.innerText=editInput.value;
            editInput.remove()
            console.log(event.currentTarget.children)
          }else{
            let editInput=document.createElement("input");//text
            editInput.className = "editInput";
            // let submitInput = document.createElement("button");
            li.appendChild(editInput)
            // li.appendChild(submitInput)
            ul.appendChild(li)
            editInput.value=text.innerText;
          }
      
          //toggle .editmode on the parent.
          listItem.classList.toggle("editMode");

        })
      
        
        let li = document.createElement("li")
        li.appendChild(text)
        li.appendChild(button)
        li.appendChild(editButton)
        ul.appendChild(li)

  })

});
