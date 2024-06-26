const image = document.querySelector(".image");
const body = document.querySelector("body");
const duration_of_animation = 401  // ce temps represente le duree de l' animation + 1 milliseconde

const number_of_image = 5;
let index_of_current_image = 1;

function change_image(sens) {
  index_of_current_image += sens;
  if (index_of_current_image == 0) {
    index_of_current_image = number_of_image;
  }
  if (index_of_current_image == number_of_image + 1) {
    index_of_current_image = 1;
  }
  image.style.backgroundImage = `url("./asset/image${index_of_current_image}.jpg")`;
  body.style.backgroundImage = `url("./asset/image${index_of_current_image}.jpg")`;

  body.classList.add("animation");
  setTimeout(() => {
    body.classList.remove("animation");
  }, 801);
}
