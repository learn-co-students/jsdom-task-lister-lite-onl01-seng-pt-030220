document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // let enter = document.getElementById("submit");
  // console.log(enter);
  //   // for(let el of text){
  //   //   console.log(el)
  //   enter.addEventListener("click", (e) => alert(e.target.innerText))
  // // }
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
        let input = document.querySelector("input#new-task-description")
        let ul = document.querySelector("ul#tasks")
        console.log(input)

        let text = document.createElement("text")
        text.textContent = input.value
        console.log(text)
        //text.addEventListener("click", (event) => alert(event.target.textContent))
        let li = document.createElement("li")
        li.appendChild(text)

        ul.appendChild(li)
        // let ul = document.querySelector("ul")
  })

});
