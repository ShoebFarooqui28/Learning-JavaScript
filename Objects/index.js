const person = {
  firstName : "Spongebob",
  lastName : "Squarepants",
  age : 30,
  isEmployed : true,
  sayHello : function() {
    console.log("Hello, this is Spongebob!")  
  }
}

const person2 = {
  firstName : "Patrick",
  lastName : "Star",
  age : 42,
  isEmployed : false,
  sayHello : function(){
    console.log("Hello, this is Patrick!")
  }
}

person2.sayHello();