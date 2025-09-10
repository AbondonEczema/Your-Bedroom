// script.js
//email thing dont change
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
// Toggle dropdown menu
const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown");

if (menuBtn && dropdown) {
  menuBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
}
// Cookie Banner
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");

if (localStorage.getItem("cookiesAccepted")) {
  cookieBanner.style.display = "none";
}

if (acceptCookies) {
  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none"; // hides immediately
  });
}





