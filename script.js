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
