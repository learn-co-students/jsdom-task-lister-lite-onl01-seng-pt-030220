const form = document.querySelector("#create-task-form")
document.addEventListener("DOMContentLoaded", () => {
    // your code here
    form.addEventListener("submit", function(e) {
        createTask(e)
    })

});

function createTask(e) {
    e.preventDefault()
    const text = document.getElementById("new-task-description").value
    const li = document.createElement("li")
    const ul = document.getElementById("tasks")
    const parent = document.getElementById("tasks")
    li.innerHTML += text;
    appendTask(li, parent)


}

function appendTask(newTask, parent) {
    parent.appendChild(newTask)
}