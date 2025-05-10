function sum(callback, x, y){
  let result = x + y;
  callback(result);
}

function display(z){
  console.log(z);
}

sum(display, 1, 2);