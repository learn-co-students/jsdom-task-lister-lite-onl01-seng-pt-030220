document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.querySelector("#create-task-form").addEventListener("submit", function(e) {
        var text = document.getElementById("new-task-description").value
        var li = document.createElement("li")
        var ul = document.getElementById("tasks")
        li.innerHTML += text;
        ul = ul.appendChild(li);
        //if we don't do prevent default ,text will disapear
        //e.preventDefault()
    })



});