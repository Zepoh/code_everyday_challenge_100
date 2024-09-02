const hoverboard = document.querySelector(".main__hoverboard");
const total_number_of_case = 400;
const initial_color = "rgb(48, 48, 48)";

console.log(hoverboard);
for (let i = 0; i < total_number_of_case; i++) {
  let new_case = create_case();
  hoverboard.appendChild(new_case);
  new_case.addEventListener("mouseenter", () => {
    let random_color = get_random_color();
    new_case.style.backgroundColor = random_color;
    new_case.style.boxShadow = `0px 0px 6px 1px ${random_color} `;
  });
  new_case.addEventListener("mouseleave", () => {
    new_case.style.backgroundColor = initial_color;
    new_case.style.boxShadow = `none`;
  });
}

function create_case() {
  let element = document.createElement("div");
  element.classList.add("case");
  return element;
}

function get_random_color() {
  let color = "rgb(146, 2, 2)";
  color = "rgb(0, 247, 255)";
  let min_value = 200;
  let max_value = 255;
  let color_red = Math.floor(
    Math.random() * min_value + (max_value - min_value)
  );
  let color_green = Math.floor(
    Math.random() * min_value + (max_value - min_value)
  );

  let color_blue = Math.floor(
    Math.random() * min_value + (max_value - min_value)
  );
  color = `rgb(${color_red}, ${color_green}, ${color_blue})`
  console.log("color : ", color);

  return color;
}
