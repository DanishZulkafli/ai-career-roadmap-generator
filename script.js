const careerData = {
  frontend: {
    title: "Frontend Developer",
    requiredSkills: ["html", "css", "javascript", "git", "api"],
    roadmap: [
      "Master HTML semantic structure and accessibility basics.",
      "Improve CSS layout skills using Flexbox and Grid.",
      "Practice JavaScript DOM manipulation and events.",
      "Learn API integration using fetch().",
      "Build responsive portfolio projects.",
      "Learn React or Vue after strengthening JavaScript."
    ],
    projects: [
      "Responsive portfolio website",
      "Weather app using API",
      "Interactive dashboard UI",
      "Landing page with animations"
    ],
    interview: [
      "What is the difference between let, const, and var?",
      "How does the DOM work?",
      "Explain responsive design.",
      "How do you fetch data from an API?"
    ]
  },
  backend: {
    title: "Backend Developer",
    requiredSkills: ["php", "mysql", "api", "git"],
    roadmap: [
      "Understand server-side programming concepts.",
      "Practice CRUD operations with PHP and MySQL.",
      "Learn database relationships and normalization.",
      "Build REST API endpoints.",
      "Add authentication and user roles.",
      "Learn Laravel or Node.js for structured backend development."
    ],
    projects: [
      "Student management system",
      "Simple ticketing system",
      "REST API for task manager",
      "Login and role-based dashboard"
    ],
    interview: [
      "What is CRUD?",
      "How do sessions work?",
      "What is database normalization?",
      "How do you secure user input?"
    ]
  },
  fullstack: {
    title: "Full Stack Developer",
    requiredSkills: ["html", "css", "javascript", "php", "mysql", "api", "git"],
    roadmap: [
      "Strengthen frontend fundamentals.",
      "Build backend CRUD logic.",
      "Connect frontend forms with backend database.",
      "Create authentication system.",
      "Build API-based modules.",
      "Deploy projects to hosting or cloud platform."
    ],
    projects: [
      "Full stack task management system",
      "Online booking system",
      "Mini e-commerce system",
      "Admin dashboard with database"
    ],
    interview: [
      "How does frontend communicate with backend?",
      "What is an API?",
      "How do you design a database schema?",
      "How do you deploy a full stack project?"
    ]
  },
  data: {
    title: "Data Analyst",
    requiredSkills: ["python", "mysql", "git"],
    roadmap: [
      "Learn Python basics for data analysis.",
      "Practice Pandas for data cleaning.",
      "Use SQL to query structured data.",
      "Create charts and dashboards.",
      "Build data storytelling skills.",
      "Learn Power BI or Streamlit."
    ],
    projects: [
      "Sales dashboard analysis",
      "Customer behavior analysis",
      "CSV data cleaning project",
      "Streamlit analytics dashboard"
    ],
    interview: [
      "What is data cleaning?",
      "How do you handle missing values?",
      "What is the difference between WHERE and HAVING?",
      "How do you explain insights to stakeholders?"
    ]
  },
  ai: {
    title: "AI / Machine Learning Developer",
    requiredSkills: ["python", "mysql", "machine-learning", "git"],
    roadmap: [
      "Strengthen Python programming fundamentals.",
      "Learn data preprocessing and feature engineering.",
      "Understand supervised and unsupervised learning.",
      "Practice model evaluation metrics.",
      "Build simple ML applications.",
      "Deploy ML model using Streamlit or Flask."
    ],
    projects: [
      "Student performance prediction",
      "Career recommendation system",
      "Resume keyword analyzer",
      "Machine learning dashboard"
    ],
    interview: [
      "What is supervised learning?",
      "What is overfitting?",
      "How do you evaluate a classification model?",
      "What is feature engineering?"
    ]
  },
  wordpress: {
    title: "WordPress / WooCommerce Developer",
    requiredSkills: ["html", "css", "javascript", "php", "wordpress", "mysql"],
    roadmap: [
      "Strengthen WordPress theme and plugin basics.",
      "Practice custom functions.php snippets.",
      "Learn WooCommerce hooks and filters.",
      "Understand WordPress database structure.",
      "Practice troubleshooting plugin conflicts.",
      "Learn deployment, backup, SSL, and cache optimization."
    ],
    projects: [
      "WooCommerce customization snippets",
      "Custom WordPress landing page",
      "Booking website prototype",
      "WordPress troubleshooting documentation"
    ],
    interview: [
      "What is a WordPress hook?",
      "Difference between action and filter?",
      "How do you troubleshoot plugin conflict?",
      "How do you optimize a WooCommerce website?"
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
  const hours = parseInt(document.getElementById("hours").value);
  const selectedSkills = getSelectedSkills();
  const data = careerData[goal];

  const matchedSkills = data.requiredSkills.filter(skill => selectedSkills.includes(skill));
  const missingSkills = data.requiredSkills.filter(skill => !selectedSkills.includes(skill));
  const score = Math.round((matchedSkills.length / data.requiredSkills.length) * 100);

  let estimatedWeeks = 12;

  if (level === "beginner") estimatedWeeks = hours >= 8 ? 12 : 20;
  if (level === "intermediate") estimatedWeeks = hours >= 8 ? 8 : 14;
  if (level === "advanced") estimatedWeeks = hours >= 8 ? 5 : 9;

  const aiPrompt = `Act as an AI career coach. Create a ${estimatedWeeks}-week learning roadmap for a ${level} learner who wants to become a ${data.title}. Current skills: ${selectedSkills.join(", ") || "None"}. Missing skills: ${missingSkills.join(", ") || "None"}. Available study time: ${hours} hours per week. Include weekly topics, practice tasks, project ideas, and interview preparation.`;

  const resultHTML = `
    <div class="result-box">
      <span class="badge">${data.title}</span>
      <span class="badge">${level}</span>
      <span class="badge">${hours} hours/week</span>

      <h3>Career Readiness Score</h3>
      <div class="score">${score}%</div>

      <h3>Matched Skills</h3>
      <p>${matchedSkills.length ? matchedSkills.join(", ") : "No matched skills selected yet."}</p>

      <h3>Skill Gaps</h3>
      <p>${missingSkills.length ? missingSkills.join(", ") : "Great! You already selected the main required skills."}</p>

      <h3>Estimated Learning Duration</h3>
      <p>${estimatedWeeks} weeks based on your level and available study time.</p>

      <h3>Recommended Roadmap</h3>
      <ol>
        ${data.roadmap.map(item => `<li>${item}</li>`).join("")}
      </ol>

      <h3>Recommended Portfolio Projects</h3>
      <ul>
        ${data.projects.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>Interview Practice Questions</h3>
      <ul>
        ${data.interview.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>AI Prompt for Advanced Roadmap</h3>
      <div class="prompt-box">${aiPrompt}</div>
    </div>
  `;

  document.getElementById("result").className = "";
  document.getElementById("result").innerHTML = resultHTML;

  saveHistory(data.title, score, estimatedWeeks);
  displayHistory();
}

function saveHistory(title, score, weeks) {
  const history = JSON.parse(localStorage.getItem("roadmapHistory")) || [];

  history.unshift({
    title,
    score,
    weeks,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("roadmapHistory", JSON.stringify(history.slice(0, 5)));
}

function displayHistory() {
  const historyBox = document.getElementById("history");
  const history = JSON.parse(localStorage.getItem("roadmapHistory")) || [];

  if (history.length === 0) {
    historyBox.innerHTML = "<p>No roadmap generated yet.</p>";
    return;
  }

  historyBox.innerHTML = history.map(item => `
    <div class="history-item">
      <strong>${item.title}</strong>
      <p>Score: ${item.score}% | Estimated Duration: ${item.weeks} weeks</p>
      <small>${item.date}</small>
    </div>
  `).join("");
}

function clearHistory() {
  localStorage.removeItem("roadmapHistory");
  displayHistory();
}

displayHistory();
