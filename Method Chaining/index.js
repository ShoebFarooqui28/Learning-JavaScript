let userName = window.prompt("Enter your username");

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase(); //Method Chaining

console.log(userName);

