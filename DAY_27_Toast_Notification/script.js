let template_notification = document.querySelector("#template-notification")
// color_variation_S liste des differentes classes CSS responsables des varition du style des notifications
let color_variation_S = ["notifation_color1", "notifation_color2", "notifation_color3"]  
// text_variation_S liste des differents contenus textuels des notifications
let text_variation_S = ["Message One", "Message Two", "Message Three", "Message Four"]  

let button = document.querySelector(".button button")
let Notifaction_wrapper = document.querySelector(".Notifaction-wrapper")
let notifaction_model = document.querySelector(".model-notification")


console.log("QuerySelector Verificator : ", notifaction_model);

button.addEventListener("click", ()=>{
    let new_notification = create_notification()
    // console.log(new_notification);
    delete_notification(new_notification)
})

function create_notification(params) {
    let notification = notifaction_model.cloneNode(true);
    notification.classList.remove("model-notification");
    
    let index_of_text = random_number(text_variation_S.length );
    notification.children[0].innerText = text_variation_S[index_of_text] 
    let index_of_color = random_number(color_variation_S.length);
    notification.classList.add(color_variation_S[index_of_color])
    
    Notifaction_wrapper.appendChild(notification)
    
    console.log("notifaction_model : ", notifaction_model);
    console.log("notification : ", notification);

    return(notification)
}

function delete_notification(element) {
    setTimeout(() => {
        element.remove();
    }, 5000);
}

function random_number(params) {
    return(Math.floor(Math.random() * params));
}

