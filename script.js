document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const dropdown = document.querySelector(".dropdown");
  menuBtn.addEventListener("click", () => { dropdown.classList.toggle("show"); });

  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");
  if (localStorage.getItem("cookiesAccepted")) cookieBanner.style.display = "none";
  acceptCookies.addEventListener("click", () => { localStorage.setItem("cookiesAccepted","true"); cookieBanner.style.display="none"; });

  const modal = document.getElementById("emailModal");
  const closeModal = document.getElementById("closeModal");
  if (!localStorage.getItem("emailModalDismissed")) setTimeout(()=>{ modal.style.display="block"; },8000);
  closeModal.addEventListener("click",()=>{ modal.style.display="none"; localStorage.setItem("emailModalDismissed",Date.now()); });
  window.addEventListener("click",(e)=>{ if(e.target===modal){ modal.style.display="none"; localStorage.setItem("emailModalDismissed",Date.now()); } });
});
