const splitBtn = document.getElementById("split-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


let str = "впвапіп, вапвпіап, sdgdfgdfg"

function split() {
    const list = str.split(',')
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
}