// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // --- Dropdown Menu ---
  const menuBtn = document.querySelector(".menu-btn");
  const dropdown = document.querySelector(".dropdown");

  if (menuBtn && dropdown) {
    menuBtn.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });
  }

  // --- Cookie Banner ---
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");

  if (localStorage.getItem("cookiesAccepted")) {
    if (cookieBanner) cookieBanner.style.display = "none";
  }

  if (acceptCookies) {
    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      if (cookieBanner) cookieBanner.style.display = "none";
    });
  }

  // --- Email Form (keep your custom response handler) ---
  const emailForm = document.getElementById("emailForm");
  if (emailForm) {
    emailForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const emailInput = document.getElementById("email");
      const responseMsg = document.getElementById("responseMsg");

      if (emailInput && responseMsg) {
        if (emailInput.value) {
          responseMsg.textContent = "✅ Thanks! Check your inbox for the checklist.";
          responseMsg.style.color = "green";
          emailInput.value = "";
        } else {
          responseMsg.textContent = "❌ Please enter a valid email.";
          responseMsg.style.color = "red";
        }
      }
    });
  }
});
