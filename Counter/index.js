function increaseFunc() {
  let counterElem = document.getElementById("counter");
  let currentVal = Number(counterElem.textContent);
  counterElem.textContent = currentVal += 1;
}

function decreaseFunc() {
  let counterElem = document.getElementById("counter");
  let currentVal = Number(counterElem.textContent);
  counterElem.textContent = currentVal -= 1;
}

function resetFunc() {
  let counterElem = document.getElementById("counter");
  counterElem.textContent = 0;
}
