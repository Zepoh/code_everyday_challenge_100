const input_password = document.querySelector("#F-password");
const burry_background = document.querySelector(".burry_background");

console.log(burry_background);

input_password.addEventListener("input", (e) => {
  let word = manage_blur(input_password.value.length);
});

function manage_blur(length) {
  let blurry_value = 100;
  if (length <= 10) {
    blurry_value = 100 - 10 * length;
  } else {
    blurry_value = 0;
  }
  burry_background.style.backdropFilter = `blur(${blurry_value}px)`;
  console.log("burry_value : ", blurry_value);
}
