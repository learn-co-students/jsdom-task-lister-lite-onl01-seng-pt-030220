document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Input Box
  const input = document.getElementById('new-task-description');
  // Submit button
  const button = document.getElementsByTagName('input')[1];
  // Output List of tasks
  const list = document.getElementById('tasks');

  button.addEventListener ('click', function(event){
    // get the input
    let taskInput = input.value;
    let listElement = document.createElement('li');

    event.preventDefault();

    // list the input
    listElement.innerHTML = taskInput;
    list.appendChild(listElement);
  });
});
