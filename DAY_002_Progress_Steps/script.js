const table_circle = document.querySelectorAll(".circle") 
const tube = document.querySelector(".full_tubes")
const previous_button = document.querySelector("#prev")
const next_button = document.querySelector("#next")

let step = 1 // represent the current step. It can take only four value: 1 , 2 , 3 & 4
let length_of_tube = 0 //the width should take only this 4 values : 0%  35%  70% 100% 
const length_of_tube_unitary = 33

// Initialisation
next_button.classList.add("button_active")
tube.style.width = length_of_tube + "%"


function go_to_the_next_step() {
   
    if (step < 4) {
        
        table_circle[step].classList.add("circle_active")
        step++;
        length_of_tube += length_of_tube_unitary  
        if (step == 2) {
            previous_button.classList.add("button_active")
        }
        if (step == 4) {
            next_button.classList.remove("button_active")
        }
        tube.style.width = length_of_tube + "%"
    }

}

function go_to_the_previous_step() {
    
    console.log(step);

    if (step > 1) {
        length_of_tube -= length_of_tube_unitary  
        step--;
        table_circle[step].classList.remove("circle_active")
        if (step == 1) {
            previous_button.classList.remove("button_active")
        }
        if (step == 3) {
            next_button.classList.add("button_active")
        }
        tube.style.width = length_of_tube + "%"
    }
}
