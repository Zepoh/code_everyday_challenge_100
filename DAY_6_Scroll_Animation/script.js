const card = document.querySelectorAll(".content_wrapper div")

// initialize the position
manager_card()

window.addEventListener('scroll',()=>{
    manager_card()
})

function manager_card() {
    for (let i = 0; i < card.length; i++) {
        const element = card[i];
        if ((element.getBoundingClientRect().bottom) < window.innerHeight ) {
            element.style.transform =  "translateX(0vw)"
        } else {
            if (i%2 == 0) {
                element.style.transform =  "translateX(100vw)"
            } else {
                element.style.transform =  "translateX(-100vw)"
            }
        }
    }
}



