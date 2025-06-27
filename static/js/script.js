document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeModal = document.getElementById('closeModal');

  playButton.addEventListener('click', () => {
    videoModal.classList.remove('hidden');
    modalVideo.play();
  });

  closeModal.addEventListener('click', () => {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    videoModal.classList.add('hidden');
  });
});










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










 
let fabOpen = false;

window.toggleFab = function() {
  fabOpen = !fabOpen;

  const icon = document.getElementById("fabIcon");
  const buttons = [
    document.getElementById("whatsappBtn"),
    document.getElementById("callBtn")
  ];

  icon.classList.toggle("rotate-45");

  buttons.forEach(btn => {
    if (fabOpen) {
      btn.classList.remove("scale-0", "opacity-0", "pointer-events-none");
    } else {
      btn.classList.add("scale-0", "opacity-0");
      btn.classList.add("pointer-events-none");
    }
  });
};


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




