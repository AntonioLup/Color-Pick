// document.addEventListener("DOMContentLoaded", ()=>{
//     const h1 = document.querySelector("#h1")
    
//     console.log(document.body)
//     console.log(document.querySelector("#h1").textContent)
//     console.log(document.querySelector("#h1").innerHTML)

// })

const h1 = document.getElementById("h1")
const color = document.getElementById("colorPick")
const button = document.getElementById("btn")
const text = document.querySelector("#p")
const area = document.querySelector("#card")

button.addEventListener("click", () =>{
     console.log(color.value)
     text.textContent = color.value
     area.style.backgroundColor = color.value
})


// button.addEventListener("click", () =>{
//     console.log("click")
//     h1.textContent ="js texto"
//     h1.style.border = "1px solid"
//     button.classList.add("activo")

// })

// console.log(h1.className)
// console.log(h1.id)
// console.log(h1.style)
// console.log(h1.textContent)
// h1.textContent = "adio mundo cruel"
// h1.style.backgroundColor = "red"
// h1.style.color = "white"

    // console.log(document.querySelectorAll(".p"))
