const email = "farooquishoeb2@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);