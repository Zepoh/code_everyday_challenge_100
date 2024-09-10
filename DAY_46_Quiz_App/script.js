// put questions/answer for quiz in this variable
const quiz_list = [
  {
    question: "Wich language is run in a web browser? ",
    proposition: ["Java", "C", " Python", " JavaScript"],
    correct_answer: 4,
  },
  {
    question: "What does CSS stand for ",
    proposition: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      " Cascading Simple Sheets",
      " Car SUVs sailboats",
    ],
    correct_answer: 2,
  },
  {
    question: "What does HTML stand for? ",
    proposition: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hypertext Machine Language",
      " Helicopters Terminals Motorboats Lamborginis",
    ],
    correct_answer: 1,
  },
  {
    question: "What year was JavaScript launched?",
    proposition: ["1996", "1995", "1994", " none of the above"],
    correct_answer: 2,
  },
];

const template_inner_html_question_card = `
      <div class="wrapper">
        <div class="quiz">
          <div class="wrapper">
            <div class="question">
                <P>
                    Question not found
                </P>
              </div>
              <ul class="proposition">
                <li class="prop_container">
                  <input type="radio" name="proposition" id="" Value="" />
                  <label for=""></label>
                </li>
                <li class="prop_container">
                  <input type="radio" name="proposition" id="" Value="" />
                  <label for=""></label>
                </li>
                <li class="prop_container">
                  <input type="radio" name="proposition" id="" Value="" />
                  <label for=""></label>
                </li>
                <li class="prop_container">
                  <input type="radio" name="proposition" id="" Value="" />
                  <label for=""></label>
                </li>
              </ul>
          </div>
        </div>
        <div class="control">
         <div class="wrapper">
            <p>Submit</p>
          </div>
        </div>
      </div>
`;

let answer_of_user = {
    index_id_question: 0,
    user_choise: 0,

}
  
  


const body = document.querySelector("body");
let index_of_current_question = 0;

function ceate_question_card(index_id_question, question_value, proposition) {
  let new_question_card = document.createElement("div");
  new_question_card.innerHTML = template_inner_html_question_card;
  //set value and attribute for the new card
  new_question_card.setAttribute("id", `question_card${index_id_question}`);
  new_question_card.classList.add("question_card");
  new_question_card.children[0].children[0].children[0].children[0].children[0].innerHTML =
    question_value;

  const list_of_proposition_in_html =
    new_question_card.children[0].children[0].children[0].children[1].children;
  for (let i = 0; i < list_of_proposition_in_html.length; i++) {
    const element = list_of_proposition_in_html[i];
    element.children[0].setAttribute(
      "id",
      `question_card${index_id_question}_proposition${index_id_question}`
    );
    element.children[0].setAttribute(
      "name",
      `proposition_list${index_id_question}`
    );
    element.children[0].setAttribute("value", proposition[i]);
    element.children[1].setAttribute(
      "for",
      `question_card${index_id_question}_proposition${index_id_question}`
    );
    element.children[1].innerText = proposition[i];
  }

  //add submit function to new_card
  new_question_card.children[0].children[1].addEventListener("click", () => {

    Submit_quiz(index_of_current_question);
  });
  //   console.log(control_of_new_question_card);
  //add new_question_card to page
  body.appendChild(new_question_card);
}

function Submit_quiz(index_question) {
    answer_of_user[index_question] 
  console.log(quiz_list[index_question])
}

ceate_question_card(0, "What does CSS stand for? ", [
  "Java",
  "C",
  " Python",
  " JavaScript",
]);
