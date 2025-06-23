const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const enquireBtn = document.getElementById('enquire-btn');
const navLinks = document.querySelectorAll('.nav-link');
const menuIcon = document.getElementById('menu-icon'); // ✅ added

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
});

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'text-black', 'shadow-md');
    navbar.classList.remove('text-white');

    enquireBtn.classList.remove('bg-white', 'text-[#151a37]');
    enquireBtn.classList.add('bg-[#151a37]', 'text-white');

    navLinks.forEach(link => {
      link.classList.add('text-black');
      link.classList.remove('text-white');
    });

    // ✅ Change menu icon to black
    menuIcon.classList.add('text-black');
    menuIcon.classList.remove('text-white');

  } else {
    navbar.classList.remove('bg-white', 'text-black', 'shadow-md');
    navbar.classList.add('text-white');

    enquireBtn.classList.add('bg-white', 'text-[#151a37]');
    enquireBtn.classList.remove('bg-[#151a37]', 'text-white');

    navLinks.forEach(link => {
      link.classList.remove('text-black');
      link.classList.add('text-white');
    });

    // ✅ Revert menu icon to white
    menuIcon.classList.remove('text-black');
    menuIcon.classList.add('text-white');
  }
});
