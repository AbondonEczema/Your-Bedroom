
// Wait until DOM loads
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

  if (!localStorage.getItem("emailModalDismissed")) {
    setTimeout(() => {
      if (modal) {
        modal.style.display = "block";
        modal.style.zIndex = 10000; // ensure on top
      }
    }, 8000);
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      localStorage.setItem("emailModalDismissed", Date.now());
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      localStorage.setItem("emailModalDismissed", Date.now());
    }
  });
});
