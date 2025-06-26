









const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle menu when button is clicked
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the event from bubbling to the document
  mobileMenu.classList.toggle('translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnToggle = toggleBtn.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    if (!mobileMenu.classList.contains('translate-x-full')) {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.classList.remove('translate-x-0');
    }
  }
});





  const navbar = document.getElementById('navbar-container');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('bg-white/20', 'backdrop-blur-md');
    } else {
      navbar.classList.remove('bg-white/20', 'backdrop-blur-md');
    }
  });










 