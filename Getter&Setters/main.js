class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  set email(value){
    const newEmail = value.split("@")[0];
    this.newpropemail = newEmail+"@yahoo.com"; //Created a new email prop called newpropemail because if we set the email prop, the setter and constructor will be called again and it will create an infinite call stack.
  }

  get email(){
    return this.newpropemail; //When we try to access the normal email prop, it will return the newpropemail prop instead of the normal email prop.
  }

  set password(value){
    const newPassword = value.toUpperCase(); //Created a new password prop called newproppassword because if we set the password prop, the setter and constructor will be called again and it will create an infinite call stack.
    this.newproppassword = newPassword + "123"; //Added 123 to the password to make it more secure.
  }

  get password(){
    return this.newproppassword; //When we try to access the normal password prop, it will return the newproppassword prop instead of the normal password prop.
  }
}

const user1 = new User("farooquishoeb2@gmail.com", "blink123*")

console.log(user1.email); //Changes the email to "farooquishoeb2@yahoo.com"
console.log(user1.password); //Changes the password to "BLINK123*123"
