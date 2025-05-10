let numbers = [1,2,3,4,5];

let maximum = Math.max(...numbers);

let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);


let fruits = ["apple", "banana", "mango"];
let vegetables = ["spinach", "cucumber", "carrot", "cauliflower"];

let foods = [...fruits, ...vegetables, "rice", "honey", "salt"];

console.log(foods)