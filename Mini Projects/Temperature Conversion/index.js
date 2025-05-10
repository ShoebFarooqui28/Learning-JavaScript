const inputBox = document.getElementById("inputBox");
const cTof = document.getElementById("c-To-f");
const fToc = document.getElementById("f-To-c");
const submit = document.getElementById("submit-btn");
const result = document.getElementById("result");
let temp;

function convert(){
  if(cTof.checked){
    temp = Number(inputBox.value);
    fahrenheit = (temp * 9/5) + 32;
    result.textContent = `${fahrenheit}° F`;
  }
  else if(fToc.checked){
    temp = Number(inputBox.value);
    celsius = (temp-32) * 5/9
    result.textContent = `${celsius}° C`;
  }
  else{
    result.textContent = "Select a Unit";
  }
}
