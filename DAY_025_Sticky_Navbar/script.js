let nav = document.querySelector("nav");
let body = document.querySelector("body");



// setTimeout(() => {
//     nav.classList.toggle("small")
// }, 3000);

window.addEventListener("scroll",(event)=>{
    console.log(window.scrollY);
    if (window.scrollY >= 250) {
        nav.classList.add("small")
    } else {
        nav.classList.remove("small")
    }
    
})