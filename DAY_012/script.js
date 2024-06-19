const question_s = document.querySelectorAll(".question")

const path_image_cross = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" 
const path_image_arrow = "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"


question_s.forEach(question => {
    question.addEventListener("click", ()=>{
        disable_question()
        enable_question(question)
    })
});



function enable_question(question) {
    const svg = question.children[2].children[0].children[0]

    if (question.classList.contains("active")) {
        console.log("faut retirer");
        question.classList.remove("active")
        svg.setAttribute("d",path_image_arrow)
    } else {
        question.classList.add("active")
        svg.setAttribute("d",path_image_cross)
    }
    
}

function disable_question() {
    question_s.forEach(question => {
        const svg = question.children[2].children[0].children[0]
        svg.setAttribute("d",path_image_arrow)
        question.classList.remove("active")
    });
}