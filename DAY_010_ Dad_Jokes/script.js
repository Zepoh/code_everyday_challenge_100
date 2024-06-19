const paragraphe = document.querySelector(".body_content p")
const button = document.querySelector(".body_content input")


console.log(paragraphe);
console.log(button);

button.addEventListener("click", ()=>{
    const config  = {
        headers:{
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        paragraphe.innerHTML = data.joke
    })
    // .catch(error => console.error('Error:', error));

})