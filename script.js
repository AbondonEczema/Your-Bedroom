// script.js
document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const responseMsg = document.getElementById("responseMsg");

  if (emailInput.value) {
    responseMsg.textContent = "✅ Thanks! Check your inbox for the checklist.";
    emailInput.value = "";
  } else {
    responseMsg.textContent = "❌ Please enter a valid email.";
    responseMsg.style.color = "red";
  }
});
