const criteria_S = document.querySelectorAll(".criteria");

for (let index = 0; index < criteria_S.length; index++) {
  const criteria = criteria_S[index];
  criteria.addEventListener("click", () => {
    criteria.classList.toggle("active");
    console.log(criteria.children[0].children[0]);
    let i = 0;
    criteria_S.forEach((element) => {
      if (element.classList.contains("active")) {
        i++;
      }
    });
    if (i == criteria_S.length) {
      if (index == criteria_S.length - 1) {
        criteria_S[0].classList.remove("active");
      } else {
        criteria_S[index + 1].classList.remove("active");
      }
    }
  });
}
