const control_S = document.querySelectorAll(".main__mobile .control .button");
const page = document.querySelector(".main__mobile .image");

const index_page_list_S = [
  "./asset/image/house.jpg",
  "./asset/image/chien1.jpg",
  "./asset/image/pexels_leaf.jpg",
  "./asset/image/cinema.jpg",
];

//Ajout d' un attribut pour connaitre l'index d'un element par rapport a leur parent
for (let i = 0; i < control_S.length; i++) {
  const element = control_S[i];
  element.setAttribute("index_in_parent", i);
}

control_S.forEach((control) => {
  control.addEventListener("click", () => {
    console.log(control);
    control_S.forEach((element) => {
      element.classList.remove("active");
    });
    control.classList.add("active");
    go_to_page(control.getAttribute("index_in_parent"));
  });
});

function go_to_page(index) {
  // console.log(typeof(index));
  page.style.backgroundImage = `url(${index_page_list_S[index]})`;
}
