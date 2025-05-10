let x = 3;  //global variable

function function1(){
  let x = 1; //local scope
  console.log(x)
}
function function2(){
  let x = 2; //local scope
  console.log(x)
}

function1()
function2()

