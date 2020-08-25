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
        //text.addEventListener("click", (event) => alert(event.target.textContent))
        
        let button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", (event) => event.target.parentNode.remove());

        // let editButton = document.createElement("button");
        // editButton.textContent = "Edit";
        // editButton.addEventListener("click", (event) =>
        // input.innerHTML = "hello");

        
        //button.edit
        let editButton=document.createElement("button");//edit button
        editButton.textContent = "Edit";
        editButton.className = "editMode"
        editButton.addEventListener("click", (event) => {
          //console.log(event.target.parentNode.children)
          // var listItem=this.parentNode;
          // let editInput=listItem.querySelector('text');
          // let editInput=document.createElement("input");//text
          // let submitInput = document.createElement("submit");
          // li.appendChild(editInput)
          // li.appendChild(submitInput)
          // ul.appendChild(li)

          // console.log(editInput)
          // console.log(text)
          // text.innerText=editInput.value;
          var listItem = event.target.parentNode;
          var containsClass = listItem.classList.contains("editMode");
          // console.log(containsClass)
          //If class of the parent is .editmode
          if(containsClass){
      
          //switch to .editmode
          //label becomes the inputs value.
            let editInput = document.querySelector("input.editInput")
            text.innerText=editInput.value;
            //document.removeChild("input.editInput")
            //event.currentTarget.remove("input.editInput")
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
        // let ul = document.querySelector("ul")

        var editTask=function(){
          console.log("Edit Task...");
          console.log("Change 'edit' to 'save'");
          
          
          var listItem=this.parentNode;
          
          var editInput=listItem.querySelector('input[type=text]');
          var label=listItem.querySelector("label");
          var containsClass=listItem.classList.contains("editMode");
              //If class of the parent is .editmode
              if(containsClass){
          
              //switch to .editmode
              //label becomes the inputs value.
                label.innerText=editInput.value;
              }else{
                editInput.value=label.innerText;
              }
          
              //toggle .editmode on the parent.
              listItem.classList.toggle("editMode");
          }
          
          
          


  })

});
