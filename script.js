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

  // --- Email Modal ---
const modal = document.getElementById("emailModal");
const closeModal = document.getElementById("closeModal");

// Only show if not already closed recently
if (!localStorage.getItem("emailModalDismissed")) {
  setTimeout(() => {
    if (modal) modal.style.display = "block";
  }, 8000);
}

// Close modal on X click
if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    localStorage.setItem("emailModalDismissed", Date.now());
  });
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    localStorage.setItem("emailModalDismissed", Date.now());
  }
});
