document.addEventListener("DOMContentLoaded", () => {
  console.log("the DOM loaded.")


  document.querySelector('form').addEventListener('submit',
    function(event) {
      event.preventDefault();

      let userInput = document.getElementById('new-task-description').value;
      let ulTag = document.getElementById('tasks');
      let li = document.createElement('li');
      let liText = document.createTextNode(userInput);

      if (userInput === '') {
        alert('Task is empty');
      } else {
        li.appendChild(liText);
        ulTag.appendChild(li);
      };

      event.target.reset();
    });

});
