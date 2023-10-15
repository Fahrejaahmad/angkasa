// Toggle class active
const navbarNav = document.querySelector('.navbar-nav')
// ketika hamburger menu di klik 
document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active')
}
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
})




if ('serviceWorker' in navigator && 'PushManager' in window) {
  let deferredPrompt; // Variable untuk menyimpan prompt instalasi

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent automatic browser prompt
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';
    installButton.addEventListener('click', () => {
      deferredPrompt = event; // Simpan event prompt
      event.prompt(); // Show the install prompt
    });
  });

  window.addEventListener('appinstalled', (event) => {
    // Aplikasi sudah diinstal, Anda dapat menyembunyikan tombol Install
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'none';
  });
}
