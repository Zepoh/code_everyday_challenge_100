const input = document.querySelector(".body_content input")

function expand_input() {
    input.classList.toggle("input_expanded")
    console.log(input.classList);
    input.focus();
}