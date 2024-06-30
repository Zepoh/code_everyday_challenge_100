const button =document.querySelector(".button")
const ripple_div = document.querySelector(".ripple_div")


button.addEventListener("click", (event)=>{

    let top = event.clientY - button.getBoundingClientRect().top 
    let left = event.clientX - button.getBoundingClientRect().left 
    ripple_div.style.top = `${top}px`
    ripple_div.style.left = `${left}px`

    button.classList.add("active")
    setTimeout(() => {button.classList.remove("active")}, 401);
})