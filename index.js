const DECREASE_BUTTON = document.getElementById("decrease_button");
const RESET_BUTTON = document.getElementById("reset_button");
const RESULT = document.getElementById("result");

let count = 0;

DECREASE_BUTTON.addEventListener("click", () => {
  count = count - 1;
  RESULT.innerText = count;
});

RESET_BUTTON.addEventListener("click", () => {
  count = 0;
  RESULT.innerText = count;
});
