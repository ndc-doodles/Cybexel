 const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
  });



  const navbar = document.getElementById('navbar-container');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('bg-white/20', 'backdrop-blur-md');
    } else {
      navbar.classList.remove('bg-white/20', 'backdrop-blur-md');
    }
  });