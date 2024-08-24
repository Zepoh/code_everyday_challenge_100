let input = document.querySelector("input");
input.value = 1
let animated_sentence = document.querySelector("h1");
let sentence = animated_sentence.innerText;
let inteval_default = 500;
let interval = 0;
let sentence_ready = "";
animated_sentence.innerText = "";
let i = 0;



let myIntervalID = setInterval(auto_write, inteval_default);

input.addEventListener("change", () => {
  let value = input.value;
  update_interval(value);
});



function reload_auto_write(params) {
  clearInterval(myIntervalID);
  myIntervalID = setInterval(auto_write, interval);
}

function auto_write() {
  if (i >= sentence.length) {
    i = 0;
    sentence_ready = "";
  }
  const element = sentence[i];
  sentence_ready += element;
  animated_sentence.innerText = sentence_ready;
  i++;
}

function update_interval(params) {
  interval = inteval_default - (90 * params);

  const ma_table = {
    inteval_default : inteval_default,
    params : params,
    interval : interval
  }
  console.table(ma_table)

  reload_auto_write(interval);
}
