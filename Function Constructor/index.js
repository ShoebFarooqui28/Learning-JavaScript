function User (username, password) { //We cant use arrow function because the "this" keyword wont work
  this.username = username;
  this.password = password;
} 

const user1 = new User("shoebbbsss", "blink123");

console.log(user1.username)
