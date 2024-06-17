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
function move_it(label, indicateur) {
    const letter_of_lable_s = label.children
    for (let i = 0; i < letter_of_lable_s.length; i++) {
        const element = letter_of_lable_s[i];
        setTimeout(() => {
            (indicateur)?  element.classList.add("active_span"): element.classList.remove("active_span");
        }, 50*i);
    }
}
// *************👆👆**declaration**👆👆**********************

input_wrapper_s.forEach(element => {
    let label = element.children[0]
    let input = element.children[1]
    decompose_word(label)

    element.addEventListener("click", ()=>{
        input.focus()
        move_it(label, true)
        console.log("on a cliqué sur le wrapper");
    })

    input.addEventListener("blur", ()=>{
        move_it(label, false)
        console.log("il perd le focus");
    })

    label.addEventListener("click", ()=>{
        input.focus()
        console.log("on a cliqué sur le label");
    })

});