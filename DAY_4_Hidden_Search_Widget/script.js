const body_content = document.querySelector(".body_content") 
const input = document.querySelector(".body_content input")

let is_expand = false

console.log(input);

function expand_input() {
    console.log("click");
    if (is_expand) {
        input.classList.remove("input_expanded")
    } else {
        input.classList.add("input_expanded")
    }
    is_expand = !is_expand
}