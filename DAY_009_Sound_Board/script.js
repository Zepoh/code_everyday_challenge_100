const audio_s = document.querySelectorAll("figure")

console.log(audio_s);

audio_s.forEach(element => {
    element.addEventListener("click", ()=>{
        console.log(element.children[0]);
        stop_all()
        element.children[0].play()
    })
});

function stop_all() {
    audio_s.forEach(element => {
        element.children[0].pause()
    });
}