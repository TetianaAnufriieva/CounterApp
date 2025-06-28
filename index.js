const DECREASE_BUTTON = document.getElementById("decrease_button");
const RESULT = document.getElementById("result");

let count = 0;

DECREASE_BUTTON.addEventListener("click", () => {
  count = count - 1;
  RESULT.innerText = count;
});
