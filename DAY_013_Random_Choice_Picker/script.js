const text_area = document.querySelector("textarea");
const choice_wrapper = document.querySelector(".choice_wrapper");
const audio = document.querySelector("audio")
let is_randomised = false; // to determine if the function random_choice is running

text_area.value = "";
let texte = "";
let table_choice = [];

text_area.addEventListener("keyup", (event) => {
  console.log("is_randomised :", is_randomised);
  if (!is_randomised) {
    if (event.key == "Enter") {
      random_choice();
    } else {
      create_choice();
    }
  } else {
    if (event.key == "Enter") {
      is_randomised = false;
    }
  }
});

function create_choice() {
  //en gros on enleve les espaces qui se suivent en utilisant une regex
  //remplacer double espace par un seul. la lettre g c'est pour remplacer toutes les occurences
  texte = text_area.value.replace(/  /g, " ");
  texte = texte.replace(/[\r\n]/g, "");

  text_area.value = texte;

  // create choices
  let clean_table_choice = [];
  texte = text_area.value;
  table_choice = texte.split(",");

  //Nettoyage du tableau des mauvaises valeurs
  table_choice.forEach((element, index) => {
    if (!(element == "" || element == " " || element == "\n")) {
      clean_table_choice.push(table_choice[index]);
    }
  });

  // affichage des choix
  choice_wrapper.innerHTML = "";
  clean_table_choice.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("choice");
    div.innerHTML = `<p>${element}</p>`;
    choice_wrapper.appendChild(div);
  });
}

function random_choice() {
  // text_area.value = ""
  is_randomised = true;

  const number_of_choice = choice_wrapper.children.length;
  let time_interval = 50;
  let index = 0;
  let counter = 0;
  if (number_of_choice >= 2) {
    const Identificator_setInterval = setInterval(() => {
      counter++;
      index = Math.floor(Math.random() * number_of_choice);
      choice_wrapper.children[index].classList.add("active");
      audio.play()

      const Identificator_setTimeout = setTimeout(() => {
        choice_wrapper.children[index].classList.remove("active");
      }, time_interval - 1);

      console.log(time_interval);

      if (counter == 50) {
        is_randomised = false;
      }

      if (is_randomised == false) {
        clearTimeout(Identificator_setTimeout);
        choice_wrapper.children[index].classList.add("active");
        clearInterval(Identificator_setInterval);
      }
    }, time_interval);
  }
}
