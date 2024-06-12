const body_content = document.querySelector('.body_content')
const menu = document.querySelector('.menu')


let menu_is_open = false;


console.log(body_content);


function toogle_menu() {
    menu_is_open = !menu_is_open
    if (menu_is_open) {
        console.log("menu_is_open :", menu_is_open);
        menu.classList.add("menu_rotate")
        body_content.style.rotate = "-20deg";
    }else{
        console.log("menu_is_open :", menu_is_open);
        menu.classList.remove("menu_rotate")
        body_content.style.rotate = "0deg";
    }

}