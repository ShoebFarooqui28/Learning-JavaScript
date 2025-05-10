let loggedin = false;
let username;
let password;

while(!loggedin){
  username = window.prompt("Enter your username")
  password = window.prompt("Enter your password")

  if (username === "myUsername" && password === "myPassword"){
    loggedin = true
    console.log("You are logged in successfully")
  }
  else{
    console.log("Invalid Username or Password")
  }
} 
