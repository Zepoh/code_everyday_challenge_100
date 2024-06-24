const number_follower_s = document.querySelectorAll(".number_follower")

window.onload = function(){
    number_follower_s.forEach(element => {
        const current_number = element.innerHTML
        element.innerHTML = 0
        let counter = 0
        const identificatorInterval = setInterval(() => {
            counter += 112
            element.innerHTML =  counter
            if (counter >= current_number) {
                element.innerHTML = current_number
                clearInterval(identificatorInterval)
            }
        }, 10);
    });
}
