function checker() {
  let ageValue = document.getElementById("input-box").value;
  ageValue = Number(ageValue);
  let result = document.getElementById("result");

  if (isNaN(ageValue) || ageValue === 0) {  //isNan() checks the variable if it is null or NaN.
    result.textContent = "Enter a valid age.";  
  } 
  else if (ageValue >= 18) {
    result.textContent = "You are eligible to visit this website :)";
  } 
  else {
    result.textContent = "You are under 18, please exit the site right now!!!";
  }
}
