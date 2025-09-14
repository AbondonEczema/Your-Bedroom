document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const dropdown = document.querySelector(".dropdown");
  menuBtn.addEventListener("click", () => { dropdown.classList.toggle("show"); });

  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");
  if (localStorage.getItem("cookiesAccepted")) cookieBanner.style.display = "none";
  acceptCookies.addEventListener("click", () => { localStorage.setItem("cookiesAccepted","true"); cookieBanner.style.display="none"; });

  const modal = document.getElementById("emailModal");
  const closeModal = document.getElementById("closeModal");// Wait until the DOM is fully loaded
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

  if (localStorage.getItem("cookiesAccepted") && cookieBanner) {
    cookieBanner.style.display = "none";
  }

  if (acceptCookies && cookieBanner) {
    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
    });
  }

  // --- Email Modal ---
  const modal = document.getElementById("emailModal");
  const closeModal = document.getElementById("closeModal");

  if (modal && !localStorage.getItem("emailModalDismissed")) {
    setTimeout(() => {
      modal.style.display = "block";
    }, 8000);
  }

  if (closeModal && modal) {
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

  if (!localStorage.getItem("emailModalDismissed")) setTimeout(()=>{ modal.style.display="block"; },8000);
  closeModal.addEventListener("click",()=>{ modal.style.display="none"; localStorage.setItem("emailModalDismissed",Date.now()); });
  window.addEventListener("click",(e)=>{ if(e.target===modal){ modal.style.display="none"; localStorage.setItem("emailModalDismissed",Date.now()); } });
});

