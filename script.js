const STORAGE_KEY = "careerRoadmapHistory";
let currentRoadmap = null;

const careerData = {
  frontend: {
    title: "Frontend Developer",
    requiredSkills: ["html", "css", "javascript", "git", "api", "deployment"],
    coreSkills: ["HTML", "CSS", "JavaScript", "Git/GitHub", "API Integration", "Deployment"],
    roadmap: [
      "Master semantic HTML and accessibility basics.",
      "Improve CSS layout using Flexbox, Grid, and responsive design.",
      "Practice JavaScript DOM manipulation, events, and array methods.",
      "Learn API integration using fetch().",
      "Build interactive frontend projects.",
      "Deploy projects using GitHub Pages, Netlify, or Vercel."
    ],
    weeklyPlan: [
      "Week 1-2: HTML, CSS, responsive layout",
      "Week 3-4: JavaScript fundamentals and DOM",
      "Week 5-6: API integration and project practice",
      "Week 7-8: Portfolio polishing and deployment"
    ],
    projects: [
      "Responsive portfolio website",
      "Weather app using public API",
      "Interactive dashboard UI",
      "Task tracker with LocalStorage",
      "Landing page with animations"
    ],
    interview: [
      "What is semantic HTML?",
      "Explain the difference between Flexbox and Grid.",
      "What is the DOM?",
      "How do you fetch data from an API?",
      "How do you make a website responsive?"
    ],
    resources: [
      "MDN Web Docs",
      "Frontend Mentor",
      "JavaScript.info",
      "GitHub Pages documentation"
    ]
  },

  backend: {
    title: "Backend Developer",
    requiredSkills: ["php", "mysql", "api", "git", "security", "deployment"],
    coreSkills: ["PHP / Node.js", "SQL", "REST API", "Authentication", "Security", "Deployment"],
    roadmap: [
      "Understand server-side programming concepts.",
      "Practice CRUD operations with database.",
      "Learn authentication, sessions, and user roles.",
      "Build REST API endpoints.",
      "Add validation and error handling.",
      "Deploy backend apps to hosting or cloud platform."
    ],
    weeklyPlan: [
      "Week 1-2: Server-side basics and routing",
      "Week 3-4: Database CRUD and schema design",
      "Week 5-6: Authentication and security",
      "Week 7-8: API documentation and deployment"
    ],
    projects: [
      "Student management system",
      "Simple ticketing system",
      "REST API for task manager",
      "Login and role-based dashboard",
      "Booking system backend"
    ],
    interview: [
      "What is CRUD?",
      "How does authentication work?",
      "What is database normalization?",
      "How do you prevent SQL injection?",
      "What is an API endpoint?"
    ],
    resources: [
      "PHP documentation",
      "Laravel documentation",
      "Node.js documentation",
      "OWASP Web Security"
    ]
  },

  fullstack: {
    title: "Full Stack Developer",
    requiredSkills: ["html", "css", "javascript", "php", "mysql", "api", "git", "deployment"],
    coreSkills: ["Frontend", "Backend", "Database", "API", "Authentication", "Deployment"],
    roadmap: [
      "Strengthen frontend fundamentals.",
      "Build backend CRUD logic.",
      "Connect frontend forms with backend database.",
      "Create authentication system.",
      "Build API-based modules.",
      "Deploy complete full stack applications."
    ],
    weeklyPlan: [
      "Week 1-2: Frontend UI and forms",
      "Week 3-4: Backend CRUD and database",
      "Week 5-6: Authentication and API",
      "Week 7-10: Full system project and deployment"
    ],
    projects: [
      "Full stack task management system",
      "Online booking system",
      "Mini e-commerce system",
      "Admin dashboard with database",
      "Helpdesk ticketing system"
    ],
    interview: [
      "How does frontend communicate with backend?",
      "What is REST API?",
      "How do you design a database schema?",
      "How do you deploy a full stack project?",
      "How do you handle user authentication?"
    ],
    resources: [
      "MDN Web Docs",
      "Laravel or Express documentation",
      "MySQL documentation",
      "Render / Railway deployment docs"
    ]
  },

  data: {
    title: "Data Analyst",
    requiredSkills: ["python", "mysql", "git"],
    coreSkills: ["Python", "SQL", "Pandas", "Data Cleaning", "Visualization", "Storytelling"],
    roadmap: [
      "Learn Python basics for data analysis.",
      "Practice Pandas for data cleaning.",
      "Use SQL to query structured data.",
      "Create charts and dashboards.",
      "Build data storytelling skills.",
      "Create reports for stakeholders."
    ],
    weeklyPlan: [
      "Week 1-2: Python and data structures",
      "Week 3-4: Pandas and data cleaning",
      "Week 5-6: SQL analysis",
      "Week 7-8: Dashboard and reporting"
    ],
    projects: [
      "Sales dashboard analysis",
      "Customer behavior analysis",
      "CSV data cleaning project",
      "Streamlit analytics dashboard",
      "Student performance dashboard"
    ],
    interview: [
      "What is data cleaning?",
      "How do you handle missing values?",
      "What is SQL GROUP BY?",
      "How do you explain insights to stakeholders?",
      "What chart would you use for trends?"
    ],
    resources: [
      "Pandas documentation",
      "Kaggle datasets",
      "SQLBolt",
      "Power BI learning path"
    ]
  },

  ai: {
    title: "AI / Machine Learning Developer",
    requiredSkills: ["python", "mysql", "machine-learning", "git"],
    coreSkills: ["Python", "Machine Learning", "Feature Engineering", "Model Evaluation", "Deployment", "AI Ethics"],
    roadmap: [
      "Strengthen Python programming fundamentals.",
      "Learn data preprocessing and feature engineering.",
      "Understand supervised and unsupervised learning.",
      "Practice model evaluation metrics.",
      "Build simple ML applications.",
      "Deploy ML model using Streamlit or Flask."
    ],
    weeklyPlan: [
      "Week 1-2: Python and data preprocessing",
      "Week 3-4: ML algorithms and model training",
      "Week 5-6: Model evaluation and improvement",
      "Week 7-10: ML app deployment and documentation"
    ],
    projects: [
      "Student performance prediction",
      "Career recommendation system",
      "Resume keyword analyzer",
      "Machine learning dashboard",
      "AI-powered study planner"
    ],
    interview: [
      "What is supervised learning?",
      "What is overfitting?",
      "How do you evaluate a classification model?",
      "What is feature engineering?",
      "What is the difference between precision and recall?"
    ],
    resources: [
      "Scikit-learn documentation",
      "Kaggle Learn",
      "Google Machine Learning Crash Course",
      "Streamlit documentation"
    ]
  },

  wordpress: {
    title: "WordPress / WooCommerce Developer",
    requiredSkills: ["html", "css", "javascript", "php", "wordpress", "mysql", "seo"],
    coreSkills: ["WordPress", "WooCommerce", "PHP", "CSS", "SEO", "Hosting"],
    roadmap: [
      "Strengthen WordPress theme and plugin basics.",
      "Practice custom functions.php snippets.",
      "Learn WooCommerce hooks and filters.",
      "Understand WordPress database structure.",
      "Practice troubleshooting plugin conflicts.",
      "Learn deployment, backup, SSL, and cache optimization."
    ],
    weeklyPlan: [
      "Week 1-2: WordPress structure and theme basics",
      "Week 3-4: WooCommerce customization",
      "Week 5-6: Troubleshooting and performance",
      "Week 7-8: Security, SEO, and deployment"
    ],
    projects: [
      "WooCommerce customization snippets",
      "Custom WordPress landing page",
      "Booking website prototype",
      "WordPress troubleshooting documentation",
      "SEO optimization checklist"
    ],
    interview: [
      "What is a WordPress hook?",
      "Difference between action and filter?",
      "How do you troubleshoot plugin conflict?",
      "How do you optimize a WooCommerce website?",
      "How do you secure WordPress?"
    ],
    resources: [
      "WordPress Developer Handbook",
      "WooCommerce Hook Reference",
      "Yoast SEO guide",
      "Elementor documentation"
    ]
  },

  cybersecurity: {
    title: "Cybersecurity Beginner",
    requiredSkills: ["security", "git", "api"],
    coreSkills: ["Security Basics", "OWASP", "Network Basics", "Secure Coding", "Risk Awareness", "Incident Response"],
    roadmap: [
      "Learn security fundamentals and common threats.",
      "Study OWASP Top 10 web vulnerabilities.",
      "Practice secure password and authentication concepts.",
      "Understand basic network security.",
      "Create security checklists.",
      "Document safe coding practices."
    ],
    weeklyPlan: [
      "Week 1-2: Security fundamentals",
      "Week 3-4: OWASP Top 10",
      "Week 5-6: Secure coding checklist",
      "Week 7-8: Incident response basics"
    ],
    projects: [
      "Personal security checklist",
      "OWASP Top 10 summary website",
      "Password strength checker",
      "Secure login best practices guide",
      "Incident response checklist"
    ],
    interview: [
      "What is phishing?",
      "What is SQL injection?",
      "What is XSS?",
      "How do you secure user passwords?",
      "What is multi-factor authentication?"
    ],
    resources: [
      "OWASP",
      "TryHackMe beginner path",
      "PortSwigger Web Security Academy",
      "Cybersecurity and Infrastructure Security Agency resources"
    ]
  },

  uiux: {
    title: "UI/UX Designer",
    requiredSkills: ["figma", "html", "css"],
    coreSkills: ["Figma", "Wireframing", "User Research", "Design Systems", "Prototyping", "Usability Testing"],
    roadmap: [
      "Learn user interface design fundamentals.",
      "Practice wireframes and low-fidelity layouts.",
      "Create design systems and reusable components.",
      "Build interactive prototypes.",
      "Run usability checks.",
      "Document design decisions and case studies."
    ],
    weeklyPlan: [
      "Week 1-2: UI principles and wireframing",
      "Week 3-4: Figma components and design system",
      "Week 5-6: Prototyping and testing",
      "Week 7-8: Portfolio case study"
    ],
    projects: [
      "Mobile app onboarding design",
      "Website homepage redesign",
      "Dashboard UI kit",
      "Booking app prototype",
      "Usability case study"
    ],
    interview: [
      "What is user-centered design?",
      "How do you create a wireframe?",
      "What is a design system?",
      "How do you test usability?",
      "How do you explain design decisions?"
    ],
    resources: [
      "Figma Learn",
      "Nielsen Norman Group",
      "Material Design",
      "Apple Human Interface Guidelines"
    ]
  }
};

function getSelectedSkills() {
  return Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
    .map(input => input.value);
}

function generateRoadmap() {
  const goal = document.getElementById("careerGoal").value;
  const level = document.getElementById("level").value;
  const hours = Number(document.getElementById("hours").value);
  const selectedSkills = getSelectedSkills();
  const data = careerData[goal];

  const matchedSkills = data.requiredSkills.filter(skill => selectedSkills.includes(skill));
  const missingSkills = data.requiredSkills.filter(skill => !selectedSkills.includes(skill));

  const score = Math.round((matchedSkills.length / data.requiredSkills.length) * 100);
  const estimatedWeeks = calculateWeeks(level, hours, missingSkills.length);

  const aiPrompt = generateAIPrompt(data.title, level, hours, selectedSkills, missingSkills, estimatedWeeks);

  currentRoadmap = {
    title: data.title,
    level,
    hours,
    score,
    estimatedWeeks,
    matchedSkills,
    missingSkills,
    roadmap: data.roadmap,
    weeklyPlan: data.weeklyPlan,
    projects: data.projects,
    interview: data.interview,
    resources: data.resources,
    aiPrompt,
    createdAt: new Date().toISOString()
  };

  renderRoadmap(currentRoadmap, data);
  saveHistory(currentRoadmap);
  displayHistory();
  updateStats(currentRoadmap);
}

function calculateWeeks(level, hours, gapCount) {
  let weeks = 12;

  if (level === "beginner") weeks = 18;
  if (level === "intermediate") weeks = 12;
  if (level === "advanced") weeks = 8;

  if (hours >= 8) weeks -= 3;
  if (hours >= 12) weeks -= 5;
  if (hours <= 3) weeks += 4;

  weeks += gapCount;

  return Math.max(4, weeks);
}

function renderRoadmap(roadmap, data) {
  document.getElementById("result").className = "";
  document.getElementById("result").innerHTML = `
    <div class="result-box">
      <span class="badge">${roadmap.title}</span>
      <span class="badge purple">${capitalize(roadmap.level)}</span>
      <span class="badge green">${roadmap.hours} hours/week</span>

      <h3>Career Readiness Score</h3>
      <div class="score">${roadmap.score}%</div>

      <div class="progress-section">
        <div class="progress-label">
          <span>Readiness Progress</span>
          <span>${roadmap.score}%</span>
        </div>
        <div class="progress-bg">
          <div class="progress-fill" style="width: ${roadmap.score}%"></div>
        </div>
      </div>

      <div class="columns">
        <div class="info-panel">
          <h3>Matched Skills</h3>
          ${
            roadmap.matchedSkills.length
              ? roadmap.matchedSkills.map(skill => `<span class="badge green">${formatSkill(skill)}</span>`).join("")
              : "<p>No matched skills selected yet.</p>"
          }
        </div>

        <div class="info-panel">
          <h3>Skill Gaps</h3>
          ${
            roadmap.missingSkills.length
              ? roadmap.missingSkills.map(skill => `<span class="badge red">${formatSkill(skill)}</span>`).join("")
              : "<p>No major skill gaps detected.</p>"
          }
        </div>
      </div>

      <h3>Estimated Learning Duration</h3>
      <p><strong>${roadmap.estimatedWeeks} weeks</strong> based on your level, weekly study time, and missing skills.</p>

      <h3>Core Skills for This Role</h3>
      ${data.coreSkills.map(skill => `<span class="badge">${skill}</span>`).join("")}

      <h3>Roadmap Timeline</h3>
      <div class="timeline">
        ${roadmap.roadmap.map((item, index) => `
          <div class="timeline-item">
            <strong>Step ${index + 1}</strong>
            <p>${item}</p>
          </div>
        `).join("")}
      </div>

      <h3>Suggested Weekly Learning Plan</h3>
      <ol>
        ${roadmap.weeklyPlan.map(item => `<li>${item}</li>`).join("")}
      </ol>

      <h3>Recommended Portfolio Projects</h3>
      <ul>
        ${roadmap.projects.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>Interview Practice Questions</h3>
      <ul>
        ${roadmap.interview.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>Suggested Learning Resources</h3>
      <ul>
        ${roadmap.resources.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>AI Prompt for Advanced Roadmap</h3>
      <div class="prompt-box">${roadmap.aiPrompt}</div>
    </div>
  `;
}

function generateAIPrompt(title, level, hours, selectedSkills, missingSkills, estimatedWeeks) {
  return `Act as an AI career coach. Create a ${estimatedWeeks}-week learning roadmap for a ${level} learner who wants to become a ${title}. Current skills: ${selectedSkills.join(", ") || "None"}. Missing skills: ${missingSkills.join(", ") || "None"}. Available study time: ${hours} hours per week. Include weekly topics, practice tasks, project ideas, interview preparation, and portfolio milestones.`;
}

function updateStats(roadmap) {
  document.getElementById("heroScore").textContent = `${roadmap.score}%`;
  document.getElementById("heroRole").textContent = roadmap.title;
  document.getElementById("selectedRoleStat").textContent = roadmap.title;
  document.getElementById("matchedSkillStat").textContent = roadmap.matchedSkills.length;
  document.getElementById("missingSkillStat").textContent = roadmap.missingSkills.length;
  document.getElementById("durationStat").textContent = `${roadmap.estimatedWeeks} weeks`;
}

function saveHistory(roadmap) {
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  history.unshift({
    title: roadmap.title,
    score: roadmap.score,
    weeks: roadmap.estimatedWeeks,
    level: roadmap.level,
    createdAt: roadmap.createdAt
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 8)));
}

function displayHistory() {
  const historyBox = document.getElementById("history");
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (history.length === 0) {
    historyBox.innerHTML = `<p class="empty">No roadmap generated yet.</p>`;
    return;
  }

  historyBox.innerHTML = history.map(item => `
    <div class="history-item">
      <strong>${item.title}</strong>
      <p>Score: ${item.score}% | Estimated Duration: ${item.weeks} weeks | Level: ${capitalize(item.level)}</p>
      <small>${new Date(item.createdAt).toLocaleString()}</small>
    </div>
  `).join("");
}

function clearHistory() {
  const confirmed = confirm("Clear all saved roadmap history?");
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  displayHistory();
}

function exportCurrentRoadmap() {
  if (!currentRoadmap) {
    alert("Please generate a roadmap first.");
    return;
  }

  const blob = new Blob([JSON.stringify(currentRoadmap, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "career-roadmap.json";
  link.click();

  URL.revokeObjectURL(url);
}

function exportHistoryCSV() {
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (history.length === 0) {
    alert("No history to export.");
    return;
  }

  const headers = ["Role", "Score", "Estimated Weeks", "Level", "Created At"];

  const rows = history.map(item => [
    item.title,
    item.score,
    item.weeks,
    item.level,
    new Date(item.createdAt).toLocaleString()
  ]);

  const csv = [headers, ...rows]
    .map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "career-roadmap-history.csv";
  link.click();

  URL.revokeObjectURL(url);
}

function printRoadmap() {
  if (!currentRoadmap) {
    alert("Please generate a roadmap first.");
    return;
  }

  window.print();
}

function loadDemoProfile() {
  document.getElementById("careerGoal").value = "ai";
  document.getElementById("level").value = "intermediate";
  document.getElementById("hours").value = "8";

  document.querySelectorAll("input[type='checkbox']").forEach(input => {
    input.checked = ["html", "css", "javascript", "python", "mysql", "git"].includes(input.value);
  });

  generateRoadmap();
}

function formatSkill(skill) {
  const map = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    php: "PHP",
    mysql: "MySQL",
    python: "Python",
    git: "Git/GitHub",
    api: "API Integration",
    wordpress: "WordPress",
    "machine-learning": "Machine Learning",
    security: "Security Basics",
    figma: "Figma",
    seo: "SEO",
    deployment: "Deployment"
  };

  return map[skill] || skill;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

displayHistory();
