const   body_content = document.querySelector(".body_content")


document.addEventListener("keydown", (event)=>{
    if (body_content.children.length == 1) {
        body_content.innerHTML = ""  //to remove the entire content of body_content
        create_card_wrapper("event.key", event.key)
        create_card_wrapper("event.keyCode", event.keyCode)
        create_card_wrapper("event.code", event.code)
    }else{
        console.log(body_content.children[0].children[1].children[0].innerHTML);
        body_content.children[0].children[1].children[0].innerHTML = event.key 
        body_content.children[1].children[1].children[0].innerHTML = event.keyCode 
        body_content.children[2].children[1].children[0].innerHTML = event.code 
    }
})


function create_card_wrapper(titre, value) {
    let card_wrapper =  document.createElement("div")
    card_wrapper.classList.add("card_wrapper")
    body_content.appendChild(card_wrapper)

    let h2 = document.createElement('h2')
    h2.innerText = titre
    card_wrapper.appendChild(h2)

    let card = document.createElement('div')
    card.classList.add("card")
    card_wrapper.appendChild(card)

    let paragraph = document.createElement("p")
    paragraph.innerText = value
    card.appendChild(paragraph)

}