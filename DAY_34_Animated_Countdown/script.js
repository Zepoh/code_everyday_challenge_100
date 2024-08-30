const time_interval = 1000; // this is the time interval between each iteration of the animation
const number_of_iteration = 10;
const number_to_animate = document.querySelector(
  ".main__counter_progress div em"
);
const container_counter = document.querySelector("main");
const start_button = document.querySelector(".main__counter_paused input");
console.log(container_counter);

window.addEventListener("load", start_countdown);
start_button.addEventListener("click", start_countdown);

function start_countdown() {
  container_counter.classList.remove("paused");
  let index = 2;
  const my_interval_id = setInterval(() => {
    console.log(index);
    number_to_animate.innerText = index;
    index++;
    if (index > number_of_iteration) {
      stop_countdown(my_interval_id);
    }
  }, time_interval);
}

function stop_countdown(interval_id) {
  clearInterval(interval_id);
  setTimeout(() => {
    number_to_animate.innerText = 1;
    container_counter.classList.add("paused");
  }, time_interval);
}
