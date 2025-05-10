const price = [5, 10, 15, 20, 25];

const total = price.reduce(sum);

console.log(`$${total.toFixed(2)}`); //only lets the 2 digit decimal

function sum(previous, next){
  return previous + next; // when we return this the value gets returned as a accumulator in the same function
}
