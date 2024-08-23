let number_of_click_html = document.querySelector("p em")  
let number_of_click = 0
let image = document.querySelector(".image")
let heart = document.querySelector(".image i")

number_of_click_html.innerText = number_of_click

console.log("heart :", heart);


image.addEventListener("dblclick", (event)=>{
    heart.classList.remove("annimated")
    update_number_of_click()
    anime_corason(event.layerX, event.layerY)
})

function update_number_of_click() {
    number_of_click++
    number_of_click_html.innerText = number_of_click
}

function anime_corason(X, Y) {
    heart.classList.add("annimated")
    heart.style.left = `${X}px`
    heart.style.top = `${Y}px`
    console.log("heart.style : ", heart.style)
    setTimeout(() => {
        heart.classList.remove("annimated")
    }, 2000);
}