const input_wrapper_s = document.querySelectorAll(".input_wrapper")

input_wrapper_s.forEach(element => {
    let label = element.children[0]
    let input = element.children[1]

    element.addEventListener("click", ()=>{
        input.focus()
        // label.classList.add("active")
        decompose_word(label)
    })

    input.addEventListener("blur", ()=>{
        // label.classList.remove("active")
        input.blur()
    })

    label.addEventListener("click", ()=>{
        input.focus()
        // label.classList.add("active")
    })

});

function decompose_word(label) {
    console.log(label.children.length);
    if (label.children.length == 0) {
        let word = label.innerHTML 
        label.innerHTML = ""
        for (let i = 0; i < word.length; i++) {
            label.innerHTML = `${label.innerHTML}<span>${word[i]}</span>`
        }
        console.log("label.innerHTML :", label.innerHTML);
        console.log(label.children);


    }
    console.log(label.children.length);

}