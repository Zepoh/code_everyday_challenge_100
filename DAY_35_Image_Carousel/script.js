const image_container = document.querySelector(
  ".main__image_carousel .image_container"
);
const number_of_image = image_container.children.length;
const button_prev = document.querySelector(".control .button_prev");
const button_next = document.querySelector(".control .button_next");


const time_interval = 1000; // The time before go to the next image in millisecond
let index_image = 0;
let ID_set_interval_S = []; // list of set interval id

console.log(button_prev);

ID_set_interval_S[0] = setInterval(() => {
  slide_image(-1);
}, time_interval);

button_prev.addEventListener("click", () => {
  clearInterval(ID_set_interval_S[ID_set_interval_S.length - 1]);
  slide_image(1);
  reset_setInterval();
});

button_next.addEventListener("click", () => {
  clearInterval(ID_set_interval_S[ID_set_interval_S.length - 1]);
  slide_image(-1);
  reset_setInterval();
});



function reset_setInterval() {
  setTimeout(() => {
    let interval_ID = setInterval(() => {
      slide_image(-1);
    }, time_interval);

    ID_set_interval_S.forEach((identifiant) => {
      clearInterval(identifiant);
    });
    ID_set_interval_S = [];
    ID_set_interval_S.push(interval_ID);
  }, time_interval + 3000);
}

function slide_image(direction) {
  //direction is a number wich indicate the direction: 1 for left | -1 for right
  index_image = index_image - direction;

  if (index_image < 0) {
    index_image = number_of_image - 1;
  }
  if (index_image >= number_of_image) {
    index_image = 0;
  }

  console.log("ID_set_interval_S : ", ID_set_interval_S);
  image_container.style.transform = `translateX(calc(-${index_image} * var(--image_width)))`;
}

function repeat_function(params) {}
