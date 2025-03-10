const min = 1;
const max = 6;

function roll() {
  randomVal = Math.floor(Math.random() * max) + min;
  document.getElementById("counter").textContent = randomVal;
}