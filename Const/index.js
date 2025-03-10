const PI = 3.14159;
let radius;
let circumference;

function getCircumference() {
  radius = document.getElementById("textBox").value;
  radius = Number(radius);

  circumference = 2*PI*radius;

  document.getElementById("result").textContent = circumference+" cm";
};