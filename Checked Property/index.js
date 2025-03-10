const myCheckbox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visa-btn");
const masterBtn = document.getElementById("master-btn");
const gpayBtn = document.getElementById("gpay-btn");
const subResult = document.getElementById("result");
const payResult = document.getElementById("payment-result");

function checkingFunc() {
  // Subscription Check
  if (myCheckbox.checked) {
    subResult.textContent = "You are Subscribed";
  } else {
    subResult.textContent = "You are not Subscribed";
  }

  // Payment Method Check
  if (visaBtn.checked) {
    payResult.textContent = "Payment via Visa";
  } else if (masterBtn.checked) {
    payResult.textContent = "Payment via Master Card";
  } else if (gpayBtn.checked) {
    payResult.textContent = "Payment via Gpay";
  } else {
    payResult.textContent = "No payment method selected"; 
  }
}
