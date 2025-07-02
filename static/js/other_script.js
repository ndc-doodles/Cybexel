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









  document.addEventListener("DOMContentLoaded", function() {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const steps = 80;
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
  {
    label: 'fresher',
    title: 'Graphic Designer',
    exp: '0–1 years',
    department: 'Design',
    tags: ['Canva', 'Photoshop', 'Illustrator', 'CorelDRAW']
  },
  {
    label: 'fresher',
    title: 'Full Stack Developer',
    exp: '0–1 years',
    department: 'Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Python-Django', 'MySQL']
  },
  {
    label: 'fresher',
    title: 'Marketing Executive',
    exp: '0–1 years',
    department: 'Marketing',
    tags: ['Adaptability', 'Communication Skills', 'Listening Skills', 'Market Analysis']
  },
  {
    label: 'fresher',
    title: 'SEO Analyst',
    exp: '0–1 years',
    department: 'SEO',
    tags: ['On-page SEO', 'Off-page SEO', 'Keyword Research', 'Google Search Console', 'Backlinking','Internal Linking']
  },
  {
    label: 'fresher',
    title: 'Digital Marketer',
    exp: '0–1 years',
    department: 'Digital Marketing',
    tags: ['Google Ads', 'Meta Ads', 'Social Media  Marketing','Social Media  Managing']
  },
  {
    label: 'fresher',
    title: 'Telecallers',
    exp: '0–1 years',
    department: 'Telecalling',
    tags: ['Communication Skills', 'Adapatabliliy', 'Listening Skills', 'Decision Making']
  },
  {
    label: 'fresher',
    title: 'Accountant',
    exp: '0–1 years',
    department: 'Accounts',
    tags: ['Tally', 'GST Filing', 'MS Office', 'Bookkeeping']
  },
  {
    label: 'fresher',
    title: 'HR Executive',
    exp: '0–1 years',
    department: 'HR',
tags: ['Labour Law', 'Communication Skills', 'Aptitude', 'Decision Making', 'Talent Acquisition']
  }
];



let currentJobs = [];
let selectedExperience = 'all';
let selectedDepartment = 'all';

function filterJobs(category = 'all') {
  selectedExperience = category;
  applyFilters();
}

function filterDepartment(dept = 'all') {
  selectedDepartment = dept;
  applyFilters();
}

function applyFilters() {
  const container = document.getElementById('jobCards');
  const noResults = document.getElementById('noResults');
  const jobsSection = document.getElementById('jobs');
  const allJobsBtn = document.getElementById('allJobsBtn');

  jobsSection.style.display = 'block';

  currentJobs = jobs.filter(job => {
    const matchExp = selectedExperience === 'all' || job.label === selectedExperience;
    const matchDept = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchExp && matchDept;
  });

  // Update "All Jobs" button active state
  if (selectedExperience !== 'all' || selectedDepartment !== 'all') {
    allJobsBtn.classList.remove('active-tab');
  } else {
    allJobsBtn.classList.add('active-tab');
  }

  container.innerHTML = '';

  if (currentJobs.length === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
    currentJobs.forEach((job, index) => {
      const tagsHTML = job.tags.map(tag =>
        `<span class='bg-gray-100 text-xs px-2 py-1 rounded'>${tag}</span>`).join(' ');
      container.innerHTML += `
        <div class="bg-white shadow-md rounded-xl p-6 border">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-2">${job.label.charAt(0).toUpperCase() + job.label.slice(1)}</span>
          <h4 class="text-xl font-semibold text-gray-800 mb-1">${job.title}</h4>
          <p class="text-sm text-gray-600 mb-1">Experience: ${job.exp}</p>
          <p class="text-sm text-gray-600 mb-2">Department: ${job.department}</p>
          <div class="flex flex-wrap gap-2 mb-4">${tagsHTML}</div>
          <button onclick='showDetails(${index})' class="text-sm font-medium text-green-700 hover:underline">View Details</button>
        </div>`;
    });
  }
}

function resetFilters() {
  selectedExperience = 'all';
  selectedDepartment = 'all';

  // Reset dropdowns
  document.querySelectorAll('.tab-dropdown')[0].value = 'all';
  document.querySelectorAll('.tab-dropdown')[1].value = 'all';

  // Set All Jobs button active
  const allJobsBtn = document.getElementById('allJobsBtn');
  if (allJobsBtn) allJobsBtn.classList.add('active-tab');

  applyFilters();
}

function showDetails(index) {
  const job = currentJobs[index];
  document.getElementById('modalTitle').textContent = job.title;
  document.getElementById('modalLabel').textContent = `Experience: ${job.exp}`;
  document.getElementById('modalTags').innerHTML = job.tags.map(tag =>
    `<span class="bg-gray-100 text-xs px-2 py-1 rounded">${tag}</span>`
  ).join(' ');
  document.getElementById('jobModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('jobModal').classList.add('hidden');
}

function openForm() {
  document.getElementById('jobModal').classList.add('hidden');
  document.getElementById('formModal').classList.remove('hidden');
  document.getElementById('formPosition').value = document.getElementById('modalTitle').textContent;
  document.getElementById('formLabel').value = document.getElementById('modalLabel').textContent;
}

function closeForm() {
  document.getElementById('formModal').classList.add('hidden');
}

// ✅ Show all jobs on page load
document.addEventListener('DOMContentLoaded', () => {
  resetFilters();  // Show all jobs by default
});






const blogs = [
  {
    title: "The Importance of SEO: How to Rank Higher on Google / Digital marketing services ",
    date: "June 30, 2025",
    image: "./static/images/blog1.jpg",
    content: ` Search Engine Optimization (SEO) is the process of optimizing a website to improve its visibility on search engines like Google. By using relevant keywords, creating high-quality content, and ensuring technical aspects like site speed and mobile-friendliness, SEO helps websites rank higher in search results. It involves on-page tactics (e.g., meta tags, headers) and off-page strategies (e.g., backlinks). SEO is essential because higher rankings drive more organic traffic, increasing the chances of conversions. It’s a long-term strategy that aligns with search engine algorithms, ensuring your site meets user intent and provides value, ultimately boosting online presence and credibility.
<br>
   SEO matters because it directly impacts a website’s ability to attract organic traffic and enhance online visibility. With millions of websites competing for attention, ranking higher on search engines like Google ensures your content reaches the right audience. Effective SEO strategies, such as keyword optimization, quality content creation, and technical improvements, help search engines understand and prioritize your site. This leads to increased clicks, engagement, and conversions. Unlike paid ads, organic traffic from SEO is sustainable and cost-effective. By improving your search rankings, SEO not only drives more visitors but also builds credibility and trust, essential for long-term online success.<br>
   Keyword research is the foundation of effective SEO, helping you identify the terms and phrases your target audience uses when searching online. By using tools like Google Keyword Planner, Ahrefs, or SEMrush, you can discover high-volume, low-competition keywords that align with user intent. Targeting the right keywords ensures your content is relevant and visible to potential visitors. Focus on long-tail keywords for specific queries and balance search volume with competition. Proper keyword research not only improves your rankings but also drives qualified traffic, increases engagement, and boosts conversions, making it a critical step in crafting a successful SEO strategy.
<br>  Google frequently updates its search algorithms to improve user experience and deliver more relevant results. Staying ahead of these changes is crucial for maintaining and improving your website’s rankings. Key updates like Panda, Penguin, and BERT have reshaped SEO practices, emphasizing quality content, user intent, and technical optimization. To adapt, focus on creating valuable, user-focused content, ensuring mobile-friendliness, and building authoritative backlinks. Regularly monitor industry news and tools like Google Search Console to track performance and identify shifts. By staying informed and proactive, you can align your SEO strategy with Google’s evolving standards, ensuring long-term visibility and success.
<br>  The future of SEO in 2025 and beyond will be shaped by advancements in AI, voice search, and user experience. AI-driven tools like ChatGPT will revolutionize content creation and optimization, while voice search will demand more conversational, long-tail keywords. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) will become even more critical as Google prioritizes credible, user-focused content. Core Web Vitals and page experience will remain key ranking factors, emphasizing fast, mobile-friendly sites. Additionally, zero-click searches and visual search will grow, requiring brands to adapt strategies for featured snippets and image optimization. Staying agile and embracing these trends will be essential for SEO success.
`
  },
  {
    title: "Google Ads vs. SEO: Which is Better for Your Business?/ Digital marketing company near me ",
    date: "June 30, 2025",
    image: "./static/images/blog2.jpg",
        content: ` Google Ads and SEO are two essential digital marketing strategies with distinct approaches. Google Ads is a paid advertising platform that allows businesses to display ads at the top of search results, offering instant visibility and precise targeting options. In contrast, SEO (Search Engine Optimization) focuses on optimizing a website to rank organically in search results, requiring time and effort but delivering sustainable, cost-effective traffic. While Google Ads provides immediate results, SEO builds long-term growth. Understanding these key differences helps businesses choose the right strategy based on their goals, budget, and timeline, or even combine both for a comprehensive online presence.
<br>  Google Ads delivers immediate results, making it ideal for businesses seeking quick visibility and traffic. Once campaigns are set up and approved, ads can appear at the top of search results instantly, driving clicks and conversions right away. In contrast, SEO is a long-term strategy that requires time to build organic rankings. While it doesn’t offer instant results, SEO provides gradual, sustainable growth and consistent traffic over time. Businesses often use Google Ads for short-term goals like promotions, while SEO is better suited for building lasting online authority. Balancing both strategies can maximize immediate impact and long-term success.
<br>Google Ads offers precise targeting options, allowing advertisers to reach specific audiences based on demographics, location, interests, and keywords. This ensures ads are shown to the right people at the right time, driving immediate results. However, it requires ongoing investment.
<br> SEO, on the other hand, focuses on organic reach by optimizing content to rank higher in search engine results. While it takes time to build, it provides long-term visibility without direct costs. SEO targets users searching organically, offering broader reach but less precision compared to Google Ads. Both strategies complement each other for a balanced digital marketing approach.
<br>Case studies highlight how businesses leverage Google Ads, SEO, or both to achieve success. For example, an e-commerce store used Google Ads to boost sales during a holiday sale, gaining instant traffic and conversions. Meanwhile, a local service provider invested in SEO, gradually climbing search rankings and attracting consistent organic leads. Another case shows a tech company combining both strategies: Google Ads drove immediate awareness for a new product, while SEO built long-term visibility. These examples demonstrate how businesses can choose Google Ads for quick results, SEO for sustained growth, or integrate both for a balanced, high-impact digital marketing approach.
<br>  Choosing between Google Ads and SEO depends on your business goals, budget, and timeline. For immediate results, such as promoting a sale or new product, Google Ads is ideal. If you aim for long-term growth and organic visibility, invest in SEO. Small budgets may favor SEO for its cost-effectiveness, while larger budgets can benefit from Google Ads' precision targeting. Combining both strategies often yields the best results: use Google Ads for quick wins and SEO for sustained success. Analyze your audience, industry, and competitors to make an informed decision. Regularly track performance and adjust your approach to maximize ROI.


`
  },
  {
    title: "How to Create an Effective Social Media Marketing Strategy/ Digital marketing for small business ",
    date: "June 30, 2025",
    image: "./static/images/blog2.jpg",
content: ` Creating an effective social media marketing strategy starts with clear goals and objectives. Determine what you want to achieve, such as increasing brand awareness, driving website traffic, generating leads, or boosting sales. Goals should be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. For example, aim to grow Instagram followers by 20% in three months or increase engagement rates by 15% in six weeks. Align these goals with your overall business objectives to ensure consistency. Well-defined goals provide direction, help measure success, and enable you to refine strategies for better results. Start with the purpose to maximize your social media impact.
<br> Understanding your target audience is crucial for an effective social media strategy. Start by analyzing demographics like age, gender, location, income, and education. Dive deeper into psychographics, such as interests, values, and online behavior. Use tools like Google Analytics, social media insights, or surveys to gather data. Create buyer personas to represent your ideal customers, detailing their pain points, preferences, and goals. This helps tailor content, tone, and messaging to resonate with them. Knowing your audience ensures you post relevant content, choose the right platforms, and engage effectively, maximizing reach and driving meaningful connections with your brand.
<br> Selecting the right social media platforms is key to reaching your target audience effectively. Focus on where your audience is most active Instagram and TikTok for younger demographics, LinkedIn for professionals, and Facebook for a broader audience. Consider your content type: visual content thrives on Instagram and Pinterest, while Twitter is ideal for real-time updates and engagement. Analyze platform features, such as Stories, Reels, or hashtags, to align with your goals. Avoid spreading yourself too thin; prioritize 2-3 platforms where you can consistently deliver quality content. Choosing wisely ensures better engagement, saves resources, and maximizes your social media impact.
<br> A strong content strategy is the backbone of successful social media marketing. Start by defining your content pillars—key themes aligned with your brand and audience interests. Plan a mix of content types, such as educational posts, entertaining videos, user-generated content, and promotional offers. Use a content calendar to schedule posts consistently, ensuring a steady flow of engaging material. Tailor content to each platform’s strengths, like Instagram visuals or LinkedIn articles. Incorporate storytelling and visuals to captivate your audience. Regularly analyze performance metrics to refine your strategy, ensuring your content resonates, drives engagement, and supports your overall marketing goals.
<br>  Measuring ROI is essential to evaluate the success of your social media efforts. Track key metrics like engagement rates, click-through rates, conversions, and revenue generated. Use analytics tools such as Google Analytics, platform insights, or third-party software to gather data. Compare results against your goals to determine what’s working and what’s not. Identify high-performing content and replicate its success. Adjust underperforming strategies by tweaking content, targeting, or posting schedules. Regularly reviewing and refining your approach ensures continuous improvement, maximizes ROI, and keeps your social media strategy aligned with evolving audience preferences and business objectives.




`  }
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