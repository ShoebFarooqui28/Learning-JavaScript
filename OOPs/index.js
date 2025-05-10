function user(username, email, number){
  this.username = username;
  this.email = email;
  this.number = number;

  return this;
}

const user1 = new user("John", "john23@gmail.com", 1234567890);
const user2 = new user("Doe", "doedwadwadaw@gmail.com", 82746174637);

// New keyword creates a new object and sets the prototype of the new object to the constructor function's prototype.
// The constructor function initializes the properties of the new object and returns it.

console.log(user1);
console.log(user2);