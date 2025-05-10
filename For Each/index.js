let fruits = ["apple", "banana", "pineapple", "mango"];

fruits.forEach(capitalise);
fruits.forEach(display);

function display(element){
  console.log(element);
}

function capitalise(item, index, array){
  array[index] = item.toUpperCase();
}
