const range_slider = document.querySelector(".range_slider");
const input_range_slider = document.querySelector("#input_slider");
const input_range_screen = document.querySelector(".range_slider .screen");

console.log(input_range_screen);

window.addEventListener("load", () => {
  input_range_slider.value = 50;
  update_input_sceen(50);
});

input_range_slider.addEventListener("input", () => {
  update_input_sceen(input_range_slider.value);
});

function update_input_sceen(value) {
  input_range_screen.children[0].innerText = value;
  if (value <= 50) {
    offset_value = 50 - value;
  } else {
    offset_value = 50 - (100 - value);
    offset_value = -offset_value;
  }

  console.log("offset_value : ", offset_value);
  input_range_screen.style.transform = `translateX(
    calc((var(--length_range_slider) * ${value} / 100) - (var(--length_slider) / 2) + ${(offset_value / 100) * 1}rem)
  )`;
}
