const text_area = document.querySelector("textarea");
const choice_wrapper = document.querySelector(".choice_wrapper");
const choice_innerHTML = `<div class="choice"><p>2</p></div>`;

let texte = "";
let table_choice = [];
let clean_table_choice = [];

text_area.value = ""

text_area.addEventListener("keyup", (event) => {
  // console.log(e, "   ", e.key, "   ", typeof(e.key), "   ", e.key.length );
  console.log(event.key);

   remove_bad_choices()

  create_choice();

  if (event.key == "Enter") {
    random_choice();
  }
});

function create_choice() {
  // create choices
  texte = text_area.value;
  clean_table_choice = []


  table_choice = texte.split(",");
  table_choice.forEach((element, index) => {
    if (!(element == "" || element == " ")) {
      
      clean_table_choice.push(table_choice[index])  
    }
  });
  console.log(clean_table_choice);
 



  console.log("table_choice :", table_choice);

  // display choices
  choice_wrapper.innerHTML = "";
  clean_table_choice.forEach((element) => {
    if (element != "") {
      let div = document.createElement("div");
      div.innerHTML = `<div class="choice"><p>${element}</p></div>`;
      choice_wrapper.appendChild(div);
    }
  });
}

function remove_bad_choices() {
  //en gros on enleve les espaces qui se suivent
  //remplacer double espace par un seul. la lettre g c'est pour remplacer toutes les occurences
   texte = text_area.value.replace(/  /g, " ")
  // texte = text_area.value.replace(/\,  \,/g, ",")
  // texte = text_area.value.replace(/,,/g, ",")

  text_area.value = texte
}

function random_choice() {
  if (choice_wrapper.innerHTML != "") {
    console.log("debut de random choice");
  }
}
