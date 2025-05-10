function generatePass(){
  const passLen = document.getElementById("passLen").value;
  const incLower = document.getElementById("incLower").checked;
  const incUpper = document.getElementById("incUpper").checked;
  const incNum = document.getElementById("incNum").checked;

  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numChars = "0123456789";

  let allChars = "";

  if (incLower) {
    allChars+=lowerChars;
  }
  if(incUpper) {
    allChars+=upperChars;
  }
  if(incNum) {
    allChars+=numChars;
  }

  if (allChars === ""){
    document.getElementById("result").innerText  = "Select atleast any one option!"
    return;
  }

  if (passLen < 1){
    document.getElementById("result").innerText  = "Enter a valid Length!"
    return;
  }

  let password = "";
  for(let i = 0; i<passLen; i++){
    const randomIndex = Math.floor(Math.random() * allChars.length); 
    password += allChars[randomIndex]
  }

  document.getElementById("result").innerText  = password;
}

