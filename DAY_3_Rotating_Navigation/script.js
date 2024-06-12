const body_content = document.querySelector('.body_content')
const menu = document.querySelector('.menu')
const menu_option =document.querySelector(".menu_option")

let menu_is_open = false;


function toogle_menu() {
    menu_is_open = !menu_is_open
    if (menu_is_open) {
        console.log("menu_is_open :", menu_is_open);
        body_content.style.rotate = "-20deg";
        menu.classList.add("menu_rotate")
        menu_option.classList.add("menu_option_opened")
    }else{
        console.log("menu_is_open :", menu_is_open);
        body_content.style.rotate = "0deg";
        menu.classList.remove("menu_rotate")
        menu_option.classList.remove("menu_option_opened")
    }

}