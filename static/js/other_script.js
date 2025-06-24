const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');
  const enquireBtn = document.getElementById('enquire-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuIcon = document.getElementById('menu-icon');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white/30', 'backdrop-blur-md', 'shadow-md', 'text-black');
      navbar.classList.remove('text-white');

      enquireBtn.classList.remove('bg-white', 'text-[#151a37]');
      enquireBtn.classList.add('bg-[#151a37]', 'text-white');

      navLinks.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-black');
      });

      menuIcon.classList.remove('text-white');
      menuIcon.classList.add('text-black');
    } else {
      navbar.classList.remove('bg-white/30', 'backdrop-blur-md', 'shadow-md', 'text-black');
      navbar.classList.add('text-white');

      enquireBtn.classList.add('bg-white', 'text-[#151a37]');
      enquireBtn.classList.remove('bg-[#151a37]', 'text-white');

      navLinks.forEach(link => {
        link.classList.add('text-white');
        link.classList.remove('text-black');
      });

      menuIcon.classList.add('text-white');
      menuIcon.classList.remove('text-black');
    }
  });




 document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));
  });









  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 800; // total duration in ms
    const steps = 40; // total steps
    const increment = target / steps;
    let current = 0;
    let count = 0;

    const update = () => {
      current += increment;
      if (count < steps) {
        counter.innerText = Math.ceil(current);
        count++;
        setTimeout(update, duration / steps);
      } else {
        counter.innerText = target + "+";
      }
    };

    update();
  });







