const loader =  document.querySelector(".compteur"); //represents the text whose opacity decreases 
const number_loading = document.querySelector(".compteur em"); // stand for the number whose the value increase
const background_image = document.querySelector("img"); // represent the image whose the image blur decrease

let step = 100; // cause we count from 0 to 100

loader.style.opacity = `${step}%`
background_image.style.filter = `blur(${step}px)`


window.onload = function() {

    function countNumber() {
        number_loading.innerHTML = parseInt(number_loading.innerHTML) +1
        step = step - 1;
    
        loader.style.opacity = `${step}%`
        background_image.style.filter = `blur(${step}px)`
    
        if (step == 0) {
            clearInterval(interval_identifier);
        }
        console.log(step);
    }

    console.log("au debut loader.style.opacity :", loader.style.opacity );
    const interval_identifier = setInterval(countNumber, 50);
};
  