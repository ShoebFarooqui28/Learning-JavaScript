let userName;

function getEmail() {
  userName = document.getElementById("textBox").value;
  document.getElementById("userWelcome").textContent = `Welcome ${userName}`;
}

document.getElementById("submit-btn").onclick = getEmail;



