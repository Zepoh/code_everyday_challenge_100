let nav = document.querySelector("nav");
let body = document.querySelector("body");

//window.scrollY renvoie la positione sur l' axe des Y du scroll de window

window.addEventListener("scroll",(event)=>{
    console.log(window.scrollY);
    if (window.scrollY >= 250) {
        nav.classList.add("small")
    } else {
        nav.classList.remove("small")
    }
    
})