const card = document.querySelectorAll(".panel");
console.log(card);

card.forEach(element => {
    element.addEventListener('click', ()=>{
        initialiseAllCard();
        element.classList.add("active")
    })
});

function initialiseAllCard() {
    card.forEach(element => {
        element.classList.remove("active"); 
    });
}