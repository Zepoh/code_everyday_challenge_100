const menu_burger = document.querySelector(".navbar .menu_burger")
const navbar = document.querySelector(".navbar")
const menu_cross = document.querySelector(".navbar .title i")

console.log(menu_cross);

menu_burger.addEventListener("click", ()=>{
    navbar.classList.add("active")
})

menu_cross.addEventListener("click", ()=>{
    navbar.classList.remove("active")
})