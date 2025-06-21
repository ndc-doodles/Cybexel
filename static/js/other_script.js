const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');
  const enquireBtn = document.getElementById('enquire-btn');

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
    } else {
      navbar.classList.remove('bg-white', 'text-black', 'shadow-md');
      navbar.classList.add('text-white');

      enquireBtn.classList.add('bg-white', 'text-[#151a37]');
      enquireBtn.classList.remove('bg-[#151a37]', 'text-white');
    }
  });