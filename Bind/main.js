class Framework{
  constructor(server, library){
    this.server = server;
    this.library = library;
    
    //requirement
    document.querySelector("#btn")
    .addEventListener("click", this.handleClick.bind(this)) //bind() to ensure 'this' refers to the current instance of Framework otherwise it will refer to the button element.
  }

  handleClick(){
    console.log("Button clicked!");
    console.log(`Server: ${this.server}`);
  }
}

const app = new Framework("https://localhost:3000", "React");