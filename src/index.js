document.addEventListener("DOMContentLoaded", () => {
  console.log("the DOM loaded.")


  document.querySelector('form').addEventListener('submit',
    function(event) {
      event.preventDefault();
      console.log('Prevent Default works.');

      let userInput = document.getElementById('new-task-description').value;

      if (userInput === '') {
        alert('Task is empty');
      } else {
        let li = document.createElement('li')
        let liNode = document.createTextNode(userInput);
        li.appendChild(liNode);
        document.getElementById('tasks').appendChild(li)
      };

      document.getElementById('new-task-description').value = '';
    });


  document.querySelector('').addEventListener

});
