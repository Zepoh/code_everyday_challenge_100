let circle_slider = document.querySelector(".range_slider .circle")


console.log(circle_slider);


circle_slider.addEventListener("mousedown", (e)=>{
    console.log( "On attrappe le sliders", circle_slider);

    window.addEventListener("mousemove", (e)=>{
        console.log(e.clientX);
    })
    
})

// window.addEventListener()

circle_slider.addEventListener("mouseleave", ()=>{
    console.log( "On sort du  slider", circle_slider);
})

window.addEventListener("mouseup", ()=>{
    console.log("on lache le curseur n' importe ou ailleur");
    
    window.removeEventListener("mousemove",); 

})