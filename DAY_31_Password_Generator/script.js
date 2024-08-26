let input_S = document.querySelectorAll(".main__password_parameter input");
let button_clipboard = document.querySelector(".main__cliboard_button");
let display_area = document.querySelector(".main__display_password input");
let button_generate = document.querySelector(".main__generate_password");

let password_length;
let there_is_uppercase;
let there_is_lowercase;
let there_is_number;
let there_is_symbol;
let total_number_checked_input = 0;
let regex_verificator;

// #################   list of generate random character functions #############################

function generate_random_lowercase_letter() {
  let character = "";
  let max = 122 + 1;
  let min = 97;
  let ascii_code = Math.floor(Math.random() * (max - min) + min); // get a random number between min and max
  character = String.fromCharCode(ascii_code); //convert ascii code to string character
  return character;
}

function generate_random_uppercase_letter() {
  let character = "";
  let max = 90 + 1;
  let min = 65;
  let ascii_code = Math.floor(Math.random() * (max - min) + min); // get a random number between min and max
  character = String.fromCharCode(ascii_code); //convert ascii code to string character
  return character;
}

function generate_random_number() {
  let character = "";
  let max = 57 + 1;
  let min = 48;
  let ascii_code = Math.floor(Math.random() * (max - min) + min); // get a random number between min and max
  character = String.fromCharCode(ascii_code); //convert ascii code to string character
  return character;
}

function generate_random_symbol1() {
  let character = "";
  let max = 47 + 1;
  let min = 33;
  let ascii_code = Math.floor(Math.random() * (max - min) + min); // get a random number between min and max
  character = String.fromCharCode(ascii_code); //convert ascii code to string character
  return character;
}

function generate_random_symbol2() {
  let character = "";
  let max = 64 + 1;
  let min = 58;
  let ascii_code = Math.floor(Math.random() * (max - min) + min); // get a random number between min and max
  character = String.fromCharCode(ascii_code); //convert ascii code to string character
  return character;
}

let list_of_generate_random_character = [
  generate_random_lowercase_letter,
  generate_random_uppercase_letter,
  generate_random_number,
  generate_random_symbol1,
  generate_random_symbol2,
];

// ###########################################################################

upadate_parameter();

input_S.forEach((input) => {
  input.addEventListener("change", () => {
    upadate_parameter();
    display_area.value = "";
  });
});

button_generate.addEventListener("click", () => {
  display_area.value = "";
  display_area.value = generate_message(password_length);
});

button_clipboard.addEventListener("click", () => {
  let message = display_area.value;
  navigator.clipboard.writeText(message);
  alert(`Password copied to clipboard`);
});

function generate_message(nbr_of_charcater) {
  let password = "";
  for (let i = 0; i < nbr_of_charcater; i++) {
    //pour determiner quelle type de charctere sera generé
    let index = Math.floor(
      Math.random() * list_of_generate_random_character.length
    );
    password += list_of_generate_random_character[index]();
  }
  return password;
}

function upadate_parameter() {
  list_of_generate_random_character = [];
  total_number_checked_input = 0;
  regex_verificator = /[a]/

  password_length = input_S[0].value;
  there_is_uppercase = input_S[1].checked;
  there_is_lowercase = input_S[2].checked;
  there_is_number = input_S[3].checked;
  there_is_symbol = input_S[4].checked;
  if (there_is_uppercase) {
    list_of_generate_random_character.push(generate_random_uppercase_letter);
    regex_verificator = regex_verificator | /[A-Z]/;
    total_number_checked_input++;
  }
  if (there_is_lowercase) {
    list_of_generate_random_character.push(generate_random_lowercase_letter);
    regex_verificator = /[a-z]/;
    total_number_checked_input++;
  }
  if (there_is_number) {
    list_of_generate_random_character.push(generate_random_number);
    total_number_checked_input++;
  }
  if (there_is_symbol) {
    list_of_generate_random_character.push(generate_random_symbol1);
    list_of_generate_random_character.push(generate_random_symbol2);
    total_number_checked_input++;
  }

  if (total_number_checked_input == 0) {
    alert("You should choose at least two criteria");
    console.log((input_S[1].checked = true));
  }
  console.log("regex_verificator : ", regex_verificator);
  console.table(list_of_generate_random_character);
}
