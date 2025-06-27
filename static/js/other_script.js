const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const enquireBtn = document.getElementById('enquire-btn');
const navLinks = document.querySelectorAll('.nav-link');
const menuIcon = document.getElementById('menu-icon');

// Toggle mobile menu open/close
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent immediate close from document click
  mobileMenu.classList.toggle('translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
});

// Close mobile menu when clicking outside
window.addEventListener('click', (e) => {
  if (
    !mobileMenu.contains(e.target) &&
    !toggleBtn.contains(e.target) &&
    !e.target.closest('#menu-icon')
  ) {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
  }
});

const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white/30', 'backdrop-blur-md', 'shadow-md', 'text-black');
    navbar.classList.remove('text-white');

    if (enquireBtn) {
      enquireBtn.classList.remove('bg-white', 'text-[#151a37]');
      enquireBtn.classList.add('bg-[#151a37]', 'text-white');
    }

    navLinks.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-black');
    });

    menuIcon.classList.remove('text-white');
    menuIcon.classList.add('text-black');

    // Swap logo image
    logo.src = "./static/images/logo2.png";
  } else {
    navbar.classList.remove('bg-white/30', 'backdrop-blur-md', 'shadow-md', 'text-black');
    navbar.classList.add('text-white');

    if (enquireBtn) {
      enquireBtn.classList.add('bg-white', 'text-[#151a37]');
      enquireBtn.classList.remove('bg-[#151a37]', 'text-white');
    }

    navLinks.forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-black');
    });

    menuIcon.classList.add('text-white');
    menuIcon.classList.remove('text-black');

    // Revert logo image
    logo.src = "./static/images/logo1.png";
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









 document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 4000; // total duration in ms
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
});










 const jobs = [
    { label: 'fresher', title: 'Frontend Developer', exp: '0–1 years', tags: ['HTML', 'CSS', 'JavaScript'] },
    { label: 'experienced', title: 'Backend Engineer', exp: '3–5 years', tags: ['Python', 'Django', 'REST API'] },
    { label: 'internship', title: 'UI/UX Design Intern', exp: 'N/A', tags: ['Figma', 'Wireframing'] },
    { label: 'fresher', title: 'QA Tester', exp: '0–1 years', tags: ['Selenium', 'Manual Testing'] },
  ];

  let currentJobs = [];
  let jobsVisible = false;

  function filterJobs(category = 'all', button = null) {
    const jobsSection = document.getElementById('jobs');
    const container = document.getElementById('jobCards');
    const noResults = document.getElementById('noResults');
    const buttons = document.querySelectorAll('.filter-btn');

    // Toggle visibility
    jobsVisible = true;
    jobsSection.style.display = 'block';

    // Highlight filter button
    buttons.forEach(btn => btn.classList.remove('ring-2', 'ring-green-600'));
    if (button) button.classList.add('ring-2', 'ring-green-600');

    // Filter jobs
    container.innerHTML = '';
    currentJobs = category === 'all' ? jobs : jobs.filter(j => j.label === category);

    if (currentJobs.length === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
      currentJobs.forEach((job, index) => {
        const tagsHTML = job.tags.map(tag => `<span class='bg-gray-100 text-xs px-2 py-1 rounded'>${tag}</span>`).join(' ');
        container.innerHTML += `
          <div class="bg-white shadow-md rounded-xl p-6 border">
            <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-2">${job.label.charAt(0).toUpperCase() + job.label.slice(1)}</span>
            <h4 class="text-xl font-semibold text-gray-800 mb-1">${job.title}</h4>
            <p class="text-sm text-gray-600 mb-2">Experience: ${job.exp}</p>
            <div class="flex flex-wrap gap-2 mb-4">${tagsHTML}</div>
            <button onclick='showDetails(${index})' class="text-sm font-medium text-green-700 hover:underline">View Details</button>
          </div>`;
      });
    }
  }

  function showDetails(index) {
  const job = currentJobs[index];

  // Set modal content
  document.getElementById('modalTitle').textContent = job.title;
  document.getElementById('modalLabel').textContent = `Experience: ${job.exp}`;
  document.getElementById('modalTags').innerHTML = job.tags
    .map(tag => `<span class="bg-gray-100 text-xs px-2 py-1 rounded">${tag}</span>`)
    .join(' ');

  // Open modal
  document.getElementById('jobModal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('jobModal').classList.add('hidden');
}

function openForm() {
  document.getElementById('jobModal').classList.add('hidden');
  document.getElementById('formModal').classList.remove('hidden');

  // Autofill form
  document.getElementById('formPosition').value = document.getElementById('modalTitle').textContent;
  document.getElementById('formLabel').value = document.getElementById('modalLabel').textContent;
}

function closeForm() {
  document.getElementById('formModal').classList.add('hidden');
}















const blogs = [
  {
    title: "Trends in Modern Design",
    date: "June 25, 2025",
    image: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg",
    content: `Discover the latest trends shaping modern design studios...`
  },
  {
    title: "Power of Minimalist Design",
    date: "June 22, 2025",
    image: "https://img.freepik.com/free-photo/close-up-person-working-home-night_23-2149090964.jpg",
    content: "Minimalist design is more than aesthetics..."
  },
  {
    title: "Sustainable Design for Studios",
    date: "June 18, 2025",
    image: "https://img.freepik.com/free-photo/indian-woman-working-laptop-street-cafe_1157-48457.jpg",
    content: "Sustainability in design isn’t just a trend..."
  }
];


 function openBlogModal(index) {
  document.getElementById('modalTitle').innerText = blogs[index].title;
  document.getElementById('modalDate').innerText = blogs[index].date;
  document.getElementById('modalImage').src = blogs[index].image;
  document.getElementById('modalContent').innerHTML = blogs[index].content; // Use innerHTML for <br> etc.
  document.getElementById('blogModal').classList.remove('hidden');
}


  function closeBlogModal() {
    document.getElementById('blogModal').classList.add('hidden');
  }