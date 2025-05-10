let fruits = ["apple", "banana", "orange"];

fruits.push("pineapple"); //Appends
fruits.pop(); //Removes
console.log(fruits.shift()); //Returns the first element
console.log(fruits.unshift("mango")); //Removes the first element and puts a new element on that index

let numOfIndex = fruits.length;
console.log(numOfIndex);

let index = fruits.indexOf("banana");
console.log(index);

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}