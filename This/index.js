const person1 = {
  userName : "Shoeb",
  age : 19,
  sayHello : function() {
    console.log(`Hello ${this.userName}`);
  }
}

person1.sayHello();