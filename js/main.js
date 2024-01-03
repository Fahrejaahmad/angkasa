// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// json settings

if ("serviceWorker" in navigator && "PushManager" in window) {
  let deferredPrompt; // Variable untuk menyimpan prompt instalasi

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // Prevent automatic browser prompt
    const installButton = document.getElementById("installButton");
    installButton.style.display = "block";
    installButton.addEventListener("click", () => {
      deferredPrompt = event; // Simpan event prompt
      event.prompt(); // Show the install prompt
    });
  });

  window.addEventListener("appinstalled", (event) => {
    // Aplikasi sudah diinstal, Anda dapat menyembunyikan tombol Install
    const installButton = document.getElementById("installButton");
    installButton.style.display = "none";
  });
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.addEventListener("click", closePopupOutside);
  document.addEventListener("scroll", hidePopupOnScroll); // Menyembunyikan popup saat scroll
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
  document.removeEventListener("click", closePopupOutside);
  document.removeEventListener("scroll", hidePopupOnScroll);
}

function closePopupOutside(event) {
  var popup = document.getElementById("popup");
  var targetElement = event.target;
  if (!popup.contains(targetElement) && targetElement.id !== "gambarPopup") {
    hidePopup();
  }
}

function hidePopupOnScroll() {
  hidePopup();
}

function popupKetkel() {
  document.getElementById("popupKetkel").style.display = "block";
  document.addEventListener("click", closePopupOutside);
  document.addEventListener("scroll", hidePopupOnScroll); // Menyembunyikan popup saat scroll
}

function hidePopupKetkel() {
  document.getElementById("popupKetkel").style.display = "none";
  document.removeEventListener("click", closePopupOutside);
  document.removeEventListener("scroll", hidePopupOnScroll);
}

function closePopupOutside(event) {
  var popup = document.getElementById("popupKetkel");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupKetkel"
  ) {
    hidePopupKetkel();
  }
}

function hidePopupOnScroll() {
  hidePopupKetkel();
}

function popupWaketkel() {
  document.getElementById("popupWaketkel").style.display = "block";
  document.addEventListener("click", closePopupOutside);
  document.addEventListener("scroll", hidePopupOnScroll); // Menyembunyikan popup saat scroll
}

function hidePopupWaketkel() {
  document.getElementById("popupWaketkel").style.display = "none";
  document.removeEventListener("click", closePopupOutside);
  document.removeEventListener("scroll", hidePopupOnScroll);
}

function closePopupOutside(event) {
  var popup = document.getElementById("popupWaketkel");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupWaketkel"
  ) {
    hidePopupWaketkel();
  }
}

function hidePopupOnScroll() {
  hidePopupWaketkel();
}

function popupSekter() {
  document.getElementById("popupSekter").style.display = "block";
  document.addEventListener("click", closePopupOutside);
  document.addEventListener("scroll", hidePopupOnScroll); // Menyembunyikan popup saat scroll
}

function hidePopupSekter() {
  document.getElementById("popupSekter").style.display = "none";
  document.removeEventListener("click", closePopupOutside);
  document.removeEventListener("scroll", hidePopupOnScroll);
}

function closePopupOutside(event) {
  var popup = document.getElementById("popupSekter");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupSekter"
  ) {
    hidePopupSekter();
  }
}

function hidePopupOnScroll() {
  hidePopupSekter();
}

function popupSekterDua() {
  document.getElementById("popupSekterDua").style.display = "block";
  document.addEventListener("click", closePopupOutside);
  document.addEventListener("scroll", hidePopupOnScroll); // Menyembunyikan popup saat scroll
}

function hidePopupSekterDua() {
  document.getElementById("popupSekterDua").style.display = "none";
  document.removeEventListener("click", closePopupOutside);
  document.removeEventListener("scroll", hidePopupOnScroll);
}

function closePopupOutside(event) {
  var popup = document.getElementById("popupSekterDua");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupSekterDua"
  ) {
    hidePopupSekterDua();
  }
}

function hidePopupOnScroll() {
  hidePopupSekterDua();
}

function popupBendara() {
  document.getElementById("popupBendara").style.display = "block";
  document.addEventListener("click", closePopupOutside);
  document.addEventListener("scroll", hidePopupOnScroll); // Menyembunyikan popup saat scroll
}

function hidePopupBendara() {
  document.getElementById("popupBendara").style.display = "none";
  document.removeEventListener("click", closePopupOutside);
  document.removeEventListener("scroll", hidePopupOnScroll);
}

function closePopupOutside(event) {
  var popup = document.getElementById("popupBendara");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupBendara"
  ) {
    hidePopupBendara();
  }
}

function hidePopupOnScroll() {
  hidePopupBendara();
}

function popupBendaraDua() {
  document.getElementById("popupBendaraDua").style.display = "block";
  document.addEventListener("click", closePopupOutside);
  document.addEventListener("scroll", hidePopupOnScroll); // Menyembunyikan popup saat scroll
}

function hidePopupBendaraDua() {
  document.getElementById("popupBendaraDua").style.display = "none";
  document.removeEventListener("click", closePopupOutside);
  document.removeEventListener("scroll", hidePopupOnScroll);
}

function closePopupOutside(event) {
  var popup = document.getElementById("popupBendaraDua");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupBendaraDua"
  ) {
    hidePopupBendaraDua();
  }
}

function hidePopupOnScroll() {
  hidePopupBendaraDua();
}




let slideIndex = 1;

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
