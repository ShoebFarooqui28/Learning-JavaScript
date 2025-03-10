//Declaring Variables
let userName = `Shoeb`
let age = 19;
let food = `Shawarma`;

//Using Variables in the console as a log string
console.log(`You are ${userName}, You are ${age} years old, You eat ${food}`);

//Gives the type of Datatype
console.log(typeof userName);
console.log(typeof age);
console.log(typeof food);

//Boolean 
let online = true;
console.log(online)
console.log(typeof online)
console.log(`Shoeb is online : ${online}`)

//Changing the text-content of the element to a variable
document.getElementById("p1").textContent = `You are ${userName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `You eat ${food}`;