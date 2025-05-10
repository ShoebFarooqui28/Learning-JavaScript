const age = [15, 16, 17, 18, 19, 20 , 21 , 22, 23];
const filteredAgeover18 = age.filter(isAdult);
const filteredAgeunder18 = age.filter(isAdult);

function isAdult(element){
  return element >= 18;
}

function isChild(element){
  return element < 18;
}

console.log(filteredAgeover18);
console.log(filteredAgeunder18);