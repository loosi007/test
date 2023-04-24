const splitBtn = document.getElementById("split-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let list = []

splitBtn.addEventListener("click", function (){
    let str = inputEl.value
    list = str.split(',')
    for (let i = 0; i < list.length; i++){
        const li = document.createElement("li")
        li.textContent = list[i]
        ulEl.append(li)
    }
})