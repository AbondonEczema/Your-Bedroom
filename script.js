// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
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

  // Show modal if not dismissed
  if (modal && !localStorage.getItem("emailModalDismissed")) {
    setTimeout(() => {
      modal.style.display = "block";
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

});
