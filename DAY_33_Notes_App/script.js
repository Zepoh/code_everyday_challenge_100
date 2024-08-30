const add_note_button = document.querySelector(".header__button_add_note");
const note_container = document.querySelector(".main__wrapper");
const reset_buton = document.querySelector(".reset_buton");
let index_note;
let inner_html_of_new_note = `
<div class="note_header">
    <i class="fa-solid fa-pen-nib"></i>
    <i class="fa-solid fa-trash"></i>
</div>
<div class="note_body">
    <textarea name="" id="" placeholder="Insert note here"></textarea>
</div>`;

console.log("localStorage.length : ", localStorage.length);

if (localStorage.length == 0) {
  index_note = 0;
} else {
  index_note = localStorage.length;

  console.log("index_note : ", index_note);
  for (let index = 0; index < localStorage.length; index++) {
    const text_of_note = localStorage.getItem(localStorage.key(index));
    console.log("text_of_note :", text_of_note);
    create_note(index, text_of_note);
  }
}

add_note_button.addEventListener("click", () => {
  create_note(index_note++, "");
});

reset_buton.addEventListener("click", () => {
  delete_all_note();
});

function delete_all_note() {
  localStorage.clear();
  console.log(localStorage.length);
}

function create_note(index_note, text_of_note) {
  let new_note = document.createElement("div");
  new_note.innerHTML = inner_html_of_new_note;
  note_container.appendChild(new_note);
  //ajout des fonctionnalites de suppression et de modification sur une note
  let button_of_edition = new_note.children[0].children[0];
  let button_of_deletion = new_note.children[0].children[1];
  add_edition_mode_to_note(button_of_edition, new_note);
  add_delette_note_function(button_of_deletion, new_note);
  // ajout du style pour note
  new_note.classList.add("main__note");
  //ajout d' un identifiant a la note
  new_note.setAttribute("id", `note${index_note}`);
  // mettre le focus sur la note pour que l' utilisateur puisse ecrire directement
  let textarea = new_note.children[1].children[0];
  textarea.value = text_of_note;
  textarea.focus();
  return new_note;
}

function add_note_to_html(note_container, text) {
  note_container.appendChild(note);
}

function add_delette_note_function(trigger, element_to_delete) {
  trigger.addEventListener("click", () => {
    console.log("suppression en cours");
    element_to_delete.remove();
  });
}

function add_edition_mode_to_note(trigger, note) {
  let textarea = note.children[1].children[0];
  let container = note.children[1];
  trigger.addEventListener("click", () => {
    if (note.classList.contains("not_editable")) {
      textarea.disabled = false; //permet de rendre un textarea editable
      note.classList.remove("not_editable");
    } else {
      let text_to_keep = container.children[0].value;
      textarea.disabled = true;
      note.classList.add("not_editable");
      console.log("vous avez cliquer sur ", note);
      save_note(note.getAttribute("id"), text_to_keep);
    }
  });
}

function save_note(key_note, value_note) {
  localStorage.setItem(key_note, value_note);
  console.log(
    "son index dans le local storage est : ",
    key_note,
    " value note : ",
    localStorage.getItem(key_note)
  );

  console.log(
    "Nombre d' element stockes dans localStorage : ",
    localStorage.length
  );
}
