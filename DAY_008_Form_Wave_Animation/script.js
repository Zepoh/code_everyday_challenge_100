const input_wrapper_s = document.querySelectorAll(".input_wrapper")

function decompose_word(label) {
    if (label.children.length == 0) {
        let word = label.innerHTML 
        label.innerHTML = ""
        for (let i = 0; i < word.length; i++) {
            label.innerHTML = `${label.innerHTML}<span>${word[i]}</span>`
        }
    }
}



input_wrapper_s.forEach(element => {
    let label = element.children[0]
    let input = element.children[1]
    decompose_word(label)

    element.addEventListener("click", ()=>{
        input.focus()
        put_it_up(label)
        console.log("on a cliquer sur le wrapper");
        // label.classList.add("active")
    })

    input.addEventListener("blur", ()=>{
        // label.classList.remove("active")
        put_it_down(label)
        console.log("il perd le focus");
        input.blur()
    })

    label.addEventListener("click", ()=>{
        console.log("on a cliquer sur le label");
        input.focus()
        // put_it_up(label)
        // label.classList.add("active")
    })

});


function put_it_up(label) {
    const letter_of_lable_s = label.children
    for (let i = 0; i < letter_of_lable_s.length; i++) {
        const element = letter_of_lable_s[i];
        setTimeout(() => {
            console.log("betise");
            console.log("element : ", element.innerHTML);
            element.classList.add("active_span")
        }, 50*i);
    }
}

function put_it_down(label) {
    const letter_of_lable_s = label.children
    for (let i = 0; i < letter_of_lable_s.length; i++) {
        const element = letter_of_lable_s[i];
        setTimeout(() => {
            console.log("element : ", element.innerHTML);
            element.classList.remove("active_span")
        }, 50*i);
    }
}