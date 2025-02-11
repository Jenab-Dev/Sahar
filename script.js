const entrance = document.querySelector(".entrance")
const btn = document.querySelector(".btn")
const box = document.querySelector(".box")

const container = document.querySelector(".container")
const footer = document.querySelector(".footer")

setTimeout(() => {
    entrance.style.display= "none"
    container.style.display= "flex"
    footer.style.display= "flex"
}, 1);

btn.addEventListener("click", ()=>{
    btn.style.display= "none"
    box.style.display= "block"
    box.classList.add("show")
})