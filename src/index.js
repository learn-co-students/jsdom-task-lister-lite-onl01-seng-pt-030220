

document.querySelector('[type = submit]').addEventListener("click", function(e){
  // your code here
  e.preventDefault()
  console.log("we've pressed submit")
  var newTask = document.querySelector("#new-task-description").value
  console.log(newTask)
  var newItem = document.createElement("li")
  var newItemText = document.createTextNode(newTask)
  newItem.appendChild(newItemText)
  document.getElementById("list").appendChild(newItem)
});


