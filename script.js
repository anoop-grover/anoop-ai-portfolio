// Chatbot Dialogues Data
const botResponses = {
    skills: `Anoop specializes in Technical Product Management, Data Operations, and Software Engineering:
    <br><br>
    • <strong>Languages</strong>: Java, Python, JavaScript, SQL, C++
    <br>
    • <strong>Frameworks & Web Dev</strong>: React.js, Node.js, Express.js, WebSockets, Redux, Spring Boot
    <br>
    • <strong>Tools & Platforms</strong>: Git, GitHub, Docker, Redis, BullMQ, Postman, Linux (Ubuntu), MySQL, MongoDB
    <br>
    • <strong>Core Concepts</strong>: Database Management Systems (DBMS), Agile & Scrum, User Stories, API Integration, Computer Networks, Operating Systems.
    <br><br>
    He has solved <strong>450+ coding problems</strong> on LeetCode, GfG, CodeForces, and CodeChef, and achieved <strong>5-star badges in Python and C</strong> on HackerRank!`,

    pm: `Anoop applies structured Product Management principles to turn complex problem statements into functional solutions:
    <br><br>
    • <strong>Backlog Management & Agile</strong>: Proficient in writing detailed user stories, defining strict acceptance criteria, and planning sprint iterations.
    <br>
    • <strong>Planning & Prioritization</strong>: Experienced in using value-based prioritization frameworks to rank backlog epics and features.
    <br>
    • <strong>Market & User Research</strong>: Experienced in conducting competitive benchmarking, user elicitation interviews, and drafting feature roadmaps (as demonstrated in his AI Learning Platform and Co-Lab IDE).`,

    data: `Anoop has strong capabilities in data engineering, database operations, and SQL analysis:
    <br><br>
    • <strong>Database Operations Intern</strong>: Imported, cleaned, and managed over <strong>30,000+ alumni records</strong> from Excel into MySQL, setting up centralized query frameworks.
    <br>
    • <strong>SQL Querying & Integrity</strong>: Wrote optimized relational queries to clean records, locate duplicate values, and enforce structural data integrity.
    <br>
    • <strong>Targeted Reporting</strong>: Generated custom parameter-based report pipelines to assist university administrators in outreach planning.`,

    automation: `Anoop is passionate about identifying repetitive operational workflows and designing automated scripts to replace them:
    <br><br>
    • <strong>Python Automation</strong>: Writes daily data migration pipelines, custom file parsers, and reporting scripts.
    <br>
    • <strong>Google Apps Script</strong>: Deploys lightweight triggers inside Google Sheets to automatically generate reports, receipts, and sync tables.
    <br>
    • <strong>Task Queuing</strong>: Integrates background job processors like Redis and BullMQ inside containers to automate multi-process scheduling.`,

    projects: `Anoop has built two major high-fidelity engineering products:
    <br><br>
    1. <strong>Co-Lab IDE – Collaborative Code Editor</strong>: A real-time multi-user editing platform with integrated Docker compilation, Redis buffers, and BullMQ task queues.
    <br>
    2. <strong>AI Personalized Learning Platform</strong>: An educational app using AI recommendations, React frontends, and Node.js REST API services to construct custom syllabus roadmaps.
    <br><br>
    You can check the source code and details in the <strong>Projects</strong> section below!`,

    education: `Anoop is currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at <strong>Lovely Professional University (LPU)</strong> in Jalandhar, Punjab, India (Current CGPA: 7.53). He originally completed his schooling at Nosegay Public School in Khatima, Uttarakhand.`,

    contact: `You can reach out to Anoop through the following platforms:
    <br><br>
    • <strong>Email</strong>: <a href="mailto:anoop.grover23@lpu.in" style="color: var(--accent-primary);">anoop.grover23@lpu.in</a>
    <br>
    • <strong>Phone</strong>: +91 76687 99787
    <br>
    • <strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/anoopgroverrr/" target="_blank" style="color: var(--accent-primary);">linkedin.com/in/anoopgroverrr</a>
    <br>
    • <strong>GitHub</strong>: <a href="https://github.com/anoop-grover" target="_blank" style="color: var(--accent-primary);">github.com/anoop-grover</a>
    <br>
    • <strong>Twitter/X</strong>: <a href="https://x.com/anoopgroverrr" target="_blank" style="color: var(--accent-primary);">x.com/anoopgroverrr</a>
    <br><br>
    Feel free to use the contact form at the bottom of this page to send him a direct message!`,

    default: `I'm not sure about that one! I can tell you all about Anoop's skills, projects, certifications, education, and contact details. Try using the quick action buttons or ask:
    <br><br>
    • <em>"Tell me about your Database Intern experience."</em>
    <br>
    • <em>"What projects has he built?"</em>
    <br>
    • <em>"What programming languages does he know?"</em>`
};

// Language Colors Map for GitHub Repo Cards
const langColors = {
    javascript: "#f1e05a",
    typescript: "#3178c6",
    html: "#e34c26",
    css: "#563d7c",
    python: "#3572A5",
    java: "#b07219",
    "c++": "#f34b7d",
    cpp: "#f34b7d",
    shell: "#89e051",
    php: "#4F5D95"
};

// Matrix Code Rain Animation variables
let matrixInterval = null;
let canvas = null;
let ctx = null;
let matrixActive = false;

// -------------------------------------------------------------
// CHATBOT CONTROLLER
// -------------------------------------------------------------

// Load Chat history from SessionStorage on load
document.addEventListener("DOMContentLoaded", () => {
    loadChatHistory();
    animateLeetcodeStats();
    fetchGitHubRepos();
    initScrollReveal();
    initNeuralNetwork();
    initVolumeState();
    updateDiagStatus("Idle");
});

function saveChatHistory() {
    const chatBody = document.getElementById("chatBody");
    sessionStorage.setItem("portfolio-chat-history", chatBody.innerHTML);
}

function loadChatHistory() {
    const chatBody = document.getElementById("chatBody");
    const savedChat = sessionStorage.getItem("portfolio-chat-history");
    if (savedChat) {
        chatBody.innerHTML = savedChat;
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");
    const query = chatInput.value.trim();

    if (!query) return;

    // Trigger terminal view easter egg
    if (query.toLowerCase() === "/terminal") {
        chatInput.value = "";
        toggleTerminalMode();
        return;
    }

    // Update diagnostics status to analyzing
    updateDiagStatus("Processing...");
    analyzeQueryDiagnostics(query);

    // 1. Render User Message
    renderMessage(query, "user");
    chatInput.value = "";
    saveChatHistory();

    // 2. Render Typing Indicator
    const typingIndicator = renderTypingIndicator();
    
    // 3. Generate and Render Bot Response after delay
    const response = getBotResponse(query);
    setTimeout(() => {
        typingIndicator.remove();
        renderMessage(response, "bot");
        saveChatHistory();
        updateDiagStatus("Idle");
        speakText(response);
    }, 1000);
}

function sendPreset(text) {
    const chatInput = document.getElementById("chatInput");
    chatInput.value = text;
    sendMessage();
}

function renderMessage(text, sender) {
    const chatBody = document.getElementById("chatBody");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-msg", sender);
    msgDiv.innerHTML = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function renderTypingIndicator() {
    const chatBody = document.getElementById("chatBody");
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("typing-indicator");
    typingDiv.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return typingDiv;
}

function getBotResponse(input) {
    const text = input.toLowerCase();

    if (text.includes("pm") || text.includes("product") || text.includes("priorit") || text.includes("agile") || text.includes("road") || text.includes("user stor") || text.includes("backlog")) {
        return botResponses.pm;
    }
    if (text.includes("intern") || text.includes("experience") || text.includes("operations") || text.includes("database") || text.includes("alumni") || text.includes("records")) {
        return botResponses.data;
    }
    if (text.includes("data") || text.includes("sql") || text.includes("mysql") || text.includes("analys") || text.includes("report") || text.includes("mine") || text.includes("query")) {
        return botResponses.data;
    }
    if (text.includes("automation") || text.includes("apps script") || text.includes("script") || text.includes("workflow") || text.includes("google sheets")) {
        return botResponses.automation;
    }
    if (text.includes("skill") || text.includes("tech") || text.includes("language") || text.includes("code") || text.includes("framework")) {
        return botResponses.skills;
    }
    if (text.includes("project") || text.includes("build") || text.includes("ide") || text.includes("personalized") || text.includes("co-lab")) {
        return botResponses.projects;
    }
    if (text.includes("education") || text.includes("study") || text.includes("college") || text.includes("university") || text.includes("lpu")) {
        return botResponses.education;
    }
    if (text.includes("contact") || text.includes("email") || text.includes("linkedin") || text.includes("reach") || text.includes("social") || text.includes("phone")) {
        return botResponses.contact;
    }
    
    return botResponses.default;
}

// -------------------------------------------------------------
// DUAL MODE TOGGLER (CHAT / TERMINAL)
// -------------------------------------------------------------
function toggleTerminalMode() {
    const chatbotView = document.getElementById("chatbotView");
    const terminalView = document.getElementById("terminalView");
    
    if (chatbotView.classList.contains("active")) {
        chatbotView.classList.remove("active");
        terminalView.classList.add("active");
        initMatrixRain();
        // Focus terminal input
        setTimeout(() => {
            document.getElementById("terminalInput").focus();
        }, 100);
    } else {
        terminalView.classList.remove("active");
        chatbotView.classList.add("active");
        stopMatrixRain();
    }
}

// -------------------------------------------------------------
// RETRO TERMINAL & MATRIX LOGIC
// -------------------------------------------------------------
function handleTerminalCommand(event) {
    if (event.key !== "Enter") return;

    const termInput = document.getElementById("terminalInput");
    const termBody = document.getElementById("terminalBody");
    const commandText = termInput.value.trim();
    termInput.value = "";

    if (!commandText) return;

    // Log user command
    const userLine = document.createElement("div");
    userLine.classList.add("terminal-line");
    userLine.innerHTML = `<span style="color: #4ade80;">visitor@anoop-portfolio:~$</span> ${commandText}`;
    termBody.appendChild(userLine);

    // Process output
    const cmd = commandText.toLowerCase().split(" ")[0];
    let outputText = "";
    let isError = false;

    switch (cmd) {
        case "help":
            outputText = `Available commands:<br>
            • <strong>about</strong>        - Learn about Anoop Grover<br>
            • <strong>skills</strong>       - Display tech stack and skills<br>
            • <strong>pm</strong>           - Show Product Management & strategy skills<br>
            • <strong>data</strong>         - Show SQL, database, and internship skills<br>
            • <strong>projects</strong>     - List developed software applications<br>
            • <strong>matrix</strong>       - Toggle high-intensity digital matrix code rain overlay<br>
            • <strong>clear</strong>        - Clear the terminal console<br>
            • <strong>exit</strong>         - Switch back to AI chatbot assistant mode`;
            break;
        case "about":
            outputText = `Anoop Grover: CSE student at Lovely Professional University.<br>
            Focus: Software engineering, SQL database operation & management.<br>
            Location: Khatima, Uttarakhand, India.`;
            break;
        case "skills":
            outputText = `Languages: Java, Python, JavaScript, SQL, C++<br>
            Tools & Platforms: Docker, Redis, BullMQ, Postman, Git, Linux<br>
            Databases: MySQL, MongoDB<br>
            Product & Data: Product roadmaps, agile iterations, backlog prioritization, data cleaning & extraction`;
            break;
        case "pm":
            outputText = `Product roadmap prioritization, agile sprints, user story elaboration, competitor analysis.`;
            break;
        case "data":
            outputText = `Wrote SQL queries to clean, update, and manage 30k+ alumni records in MySQL database frameworks.`;
            break;
        case "projects":
            outputText = `1. Co-Lab IDE (Collaborative Code Editor - Docker/Redis/BullMQ)<br>
            2. AI Personalized Learning Platform (React/Node/OpenAI API)`;
            break;
        case "matrix":
            toggleMatrixIntensity();
            outputText = "Matrix digital rain intensity modified.";
            break;
        case "clear":
            termBody.innerHTML = "";
            termBody.scrollTop = 0;
            return;
        case "exit":
            toggleTerminalMode();
            return;
        default:
            outputText = `Shell command "${cmd}" not recognized. Type 'help' to see commands.`;
            isError = true;
    }

    const replyLine = document.createElement("div");
    replyLine.classList.add("terminal-line");
    if (isError) replyLine.classList.add("error");
    else replyLine.classList.add("system");
    replyLine.innerHTML = outputText;
    termBody.appendChild(replyLine);
    termBody.scrollTop = termBody.scrollHeight;
}

// Matrix Falling-Characters Code Rain
function initMatrixRain() {
    canvas = document.getElementById("matrixCanvas");
    ctx = canvas.getContext("2d");
    
    // Set Canvas Dimensions
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    const chars = "0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArr = chars.split("");
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const drops = Array(columns).fill(1);
    
    matrixActive = true;
    
    function draw() {
        if (!matrixActive) return;
        
        ctx.fillStyle = "rgba(5, 8, 17, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#22c55e"; // standard green text
        ctx.font = fontSize + "px monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const char = charArr[Math.floor(Math.random() * charArr.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            ctx.fillText(char, x, y);
            
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    matrixInterval = setInterval(draw, 33);
}

// Stop matrix rain
function stopMatrixRain() {
    matrixActive = false;
    if (matrixInterval) {
        clearInterval(matrixInterval);
        matrixInterval = null;
    }
    window.removeEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

function toggleMatrixIntensity() {
    const canvasEl = document.getElementById("matrixCanvas");
    if (canvasEl.style.opacity === "0.8") {
        canvasEl.style.opacity = "0.12"; // Revert to subtle background
    } else {
        canvasEl.style.opacity = "0.8"; // Make it super prominent!
    }
}

// -------------------------------------------------------------
// LEETCODE CIRCULAR STATS ANIMATION
// -------------------------------------------------------------
function animateLeetcodeStats() {
    const easyCircle = document.querySelector(".progress-ring__circle.easy");
    const mediumCircle = document.querySelector(".progress-ring__circle.medium");
    const hardCircle = document.querySelector(".progress-ring__circle.hard");
    
    if (!easyCircle) return;
    
    const radius = 32;
    const circumference = 2 * Math.PI * radius; // 201
    
    const easyPct = 0.72;
    const mediumPct = 0.73;
    const hardPct = 0.50;
    
    // Animate rings
    setTimeout(() => {
        easyCircle.style.strokeDashoffset = circumference - (circumference * easyPct);
        mediumCircle.style.strokeDashoffset = circumference - (circumference * mediumPct);
        hardCircle.style.strokeDashoffset = circumference - (circumference * hardPct);
    }, 300);
    
    // Count Up Animations
    animateValue(".easy-count", 0, 180, 1500);
    animateValue(".medium-count", 0, 220, 1500);
    animateValue(".hard-count", 0, 50, 1500);
    animateValue("#leetcodeRatingVal", 0, 1615, 1500);
}

function animateValue(selector, start, end, duration) {
    const obj = document.querySelector(selector);
    if (!obj) return;
    
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// -------------------------------------------------------------
// DYNAMIC GITHUB PROJECTS FETCHER
// -------------------------------------------------------------
async function fetchGitHubRepos() {
    const reposLoader = document.getElementById("githubReposLoader");
    const reposGrid = document.getElementById("githubReposGrid");
    
    if (!reposGrid) return;
    
    try {
        const response = await fetch("https://api.github.com/users/anoop-grover/repos?sort=updated&per_page=20");
        if (!response.ok) throw new Error("Network response not ok");
        
        const data = await response.json();
        
        // Filter out forks & sort by stargazers count
        const cleanRepos = data
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 6); // Top 6 repos
            
        if (cleanRepos.length === 0) {
            renderFallbackRepos();
            return;
        }
        
        reposGrid.innerHTML = "";
        
        cleanRepos.forEach(repo => {
            const lang = (repo.language || "JavaScript").toLowerCase();
            const dotColor = langColors[lang] || "#8b5cf6";
            
            const repoCard = document.createElement("div");
            repoCard.classList.add("repo-card");
            repoCard.innerHTML = `
                <div>
                    <div class="repo-header">
                        <i class="far fa-folder"></i>
                        <a href="${repo.html_url}" class="repo-name" target="_blank">${repo.name}</a>
                    </div>
                    <p class="repo-desc">${repo.description || "No description provided. Explore details on GitHub."}</p>
                </div>
                <div class="repo-footer">
                    <span class="repo-language">
                        <span class="repo-lang-dot" style="background-color: ${dotColor};"></span>
                        ${repo.language || "JavaScript"}
                    </span>
                    <div class="repo-stats">
                        <span class="repo-stat-item"><i class="far fa-star"></i> ${repo.stargazers_count}</span>
                        <span class="repo-stat-item"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    </div>
                </div>
            `;
            reposGrid.appendChild(repoCard);
        });
        
        // Hide loader & show grid
        reposLoader.style.display = "none";
        reposGrid.style.display = "grid";
        
    } catch (error) {
        console.error("Error fetching repos:", error);
        renderFallbackRepos();
    }
}

// Render local fallbacks if API fails or is offline
function renderFallbackRepos() {
    const reposLoader = document.getElementById("githubReposLoader");
    const reposGrid = document.getElementById("githubReposGrid");
    
    const fallbacks = [
        {
            name: "collaborative-cloud-ide",
            description: "A collaborative online code editor supporting real-time code sharing and multi-language compilation with Docker, Redis, and BullMQ.",
            language: "JavaScript",
            stars: 12,
            forks: 3
        },
        {
            name: "ai-learning-platform",
            description: "A web platform that generates personalized learning roadmaps based on user interests, skill levels, and available study hours.",
            language: "JavaScript",
            stars: 8,
            forks: 2
        }
    ];
    
    reposGrid.innerHTML = "";
    
    fallbacks.forEach(repo => {
        const lang = repo.language.toLowerCase();
        const dotColor = langColors[lang] || "#8b5cf6";
        
        const repoCard = document.createElement("div");
        repoCard.classList.add("repo-card");
        repoCard.innerHTML = `
            <div>
                <div class="repo-header">
                    <i class="far fa-folder"></i>
                    <a href="https://github.com/anoop-grover/${repo.name}" class="repo-name" target="_blank">${repo.name}</a>
                </div>
                <p class="repo-desc">${repo.description}</p>
            </div>
            <div class="repo-footer">
                <span class="repo-language">
                    <span class="repo-lang-dot" style="background-color: ${dotColor};"></span>
                    ${repo.language}
                </span>
                <div class="repo-stats">
                    <span class="repo-stat-item"><i class="far fa-star"></i> ${repo.stars}</span>
                    <span class="repo-stat-item"><i class="fas fa-code-branch"></i> ${repo.forks}</span>
                </div>
            </div>
        `;
        reposGrid.appendChild(repoCard);
    });
    
    reposLoader.style.display = "none";
    reposGrid.style.display = "grid";
}

// -------------------------------------------------------------
// SCROLL REVEAL INTERSECTION OBSERVER
// -------------------------------------------------------------
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -100px 0px", // triggers slightly before entering viewport
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// =============================================================
// INTERACTIVE "AI NEURAL NETWORK" PARTICLE CANVAS
// =============================================================
let neuralCanvas = null;
let neuralCtx = null;
let neuralParticles = [];
const maxNeuralParticles = 80;
let mouse = { x: null, y: null, radius: 150 };

function initNeuralNetwork() {
    neuralCanvas = document.getElementById("neuralCanvas");
    if (!neuralCanvas) return;
    neuralCtx = neuralCanvas.getContext("2d");
    
    resizeNeuralCanvas();
    window.addEventListener("resize", resizeNeuralCanvas);
    
    // Track mouse position across screen
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Create particles
    neuralParticles = [];
    for (let i = 0; i < maxNeuralParticles; i++) {
        neuralParticles.push(new NeuralParticle());
    }
    
    // Start animation loop
    animateNeuralCanvas();
}

function resizeNeuralCanvas() {
    if (!neuralCanvas) return;
    neuralCanvas.width = window.innerWidth;
    neuralCanvas.height = window.innerHeight;
}

class NeuralParticle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1.5;
    }
    
    update() {
        // Handle borders
        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
        
        // Move particle
        this.x += this.vx;
        this.y += this.vy;
        
        // Mouse interaction (gravity pull/push)
        if (mouse.x !== null && mouse.y !== null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                // Gentle pull towards mouse
                const force = (mouse.radius - dist) / mouse.radius;
                this.x += (dx / dist) * force * 0.5;
                this.y += (dy / dist) * force * 0.5;
            }
        }
    }
    
    draw() {
        // Is theme light or dark?
        const isWhite = document.body.classList.contains("white-theme");
        neuralCtx.fillStyle = isWhite ? "rgba(99, 102, 241, 0.4)" : "rgba(59, 130, 246, 0.4)";
        neuralCtx.beginPath();
        neuralCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        neuralCtx.fill();
    }
}

function animateNeuralCanvas() {
    if (!neuralCanvas || !neuralCtx) return;
    neuralCtx.clearRect(0, 0, neuralCanvas.width, neuralCanvas.height);
    
    // Update and draw particles
    neuralParticles.forEach(p => {
        p.update();
        p.draw();
    });
    
    // Draw connection lines
    const isWhite = document.body.classList.contains("white-theme");
    const lineColor = isWhite ? "99, 102, 241" : "59, 130, 246";
    
    for (let i = 0; i < neuralParticles.length; i++) {
        for (let j = i + 1; j < neuralParticles.length; j++) {
            let dx = neuralParticles[i].x - neuralParticles[j].x;
            let dy = neuralParticles[i].y - neuralParticles[j].y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 120) {
                let alpha = (120 - dist) / 120 * 0.15;
                neuralCtx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
                neuralCtx.lineWidth = 0.8;
                neuralCtx.beginPath();
                neuralCtx.moveTo(neuralParticles[i].x, neuralParticles[i].y);
                neuralCtx.lineTo(neuralParticles[j].x, neuralParticles[j].y);
                neuralCtx.stroke();
            }
        }
        
        // Connect to mouse if close
        if (mouse.x !== null && mouse.y !== null) {
            let dx = neuralParticles[i].x - mouse.x;
            let dy = neuralParticles[i].y - mouse.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                let alpha = (mouse.radius - dist) / mouse.radius * 0.25;
                neuralCtx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
                neuralCtx.lineWidth = 1.0;
                neuralCtx.beginPath();
                neuralCtx.moveTo(neuralParticles[i].x, neuralParticles[i].y);
                neuralCtx.lineTo(mouse.x, mouse.y);
                neuralCtx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animateNeuralCanvas);
}

// =============================================================
// VOICE AI ASSISTANT (SPEECH-TO-TEXT & TEXT-TO-SPEECH)
// =============================================================
let recognition = null;
let isRecording = false;
let isMuted = localStorage.getItem("chat-tts-muted") === "true";

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn("Speech recognition is not supported in this browser.");
        return null;
    }
    
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = 'en-US';
    
    rec.onstart = () => {
        isRecording = true;
        const micBtn = document.getElementById("chatMicBtn");
        if (micBtn) micBtn.classList.add("recording");
        updateDiagStatus("Listening...");
    };
    
    rec.onend = () => {
        isRecording = false;
        const micBtn = document.getElementById("chatMicBtn");
        if (micBtn) micBtn.classList.remove("recording");
        updateDiagStatus("Idle");
    };
    
    rec.onerror = (e) => {
        console.error("Speech recognition error:", e.error);
        isRecording = false;
        const micBtn = document.getElementById("chatMicBtn");
        if (micBtn) micBtn.classList.remove("recording");
        updateDiagStatus("Idle");
    };
    
    rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const chatInput = document.getElementById("chatInput");
        if (chatInput) {
            chatInput.value = transcript;
            sendMessage();
        }
    };
    
    return rec;
}

function toggleVoiceInput() {
    if (!recognition) {
        recognition = initSpeechRecognition();
    }
    
    if (!recognition) {
        alert("Speech Recognition is not supported by your browser. Please try Chrome, Edge, or Safari.");
        return;
    }
    
    if (isRecording) {
        recognition.stop();
    } else {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        recognition.start();
    }
}

function initVolumeState() {
    const volumeBtn = document.getElementById("chatVolumeBtn");
    if (!volumeBtn) return;
    
    if (isMuted) {
        volumeBtn.classList.add("muted");
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        volumeBtn.classList.remove("muted");
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

function toggleVolume() {
    isMuted = !isMuted;
    localStorage.setItem("chat-tts-muted", isMuted);
    
    const volumeBtn = document.getElementById("chatVolumeBtn");
    if (volumeBtn) {
        if (isMuted) {
            volumeBtn.classList.add("muted");
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        } else {
            volumeBtn.classList.remove("muted");
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }
}

function speakText(text) {
    if (isMuted) return;
    if (!window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    
    // Clean text to avoid reading HTML tags aloud
    let cleanText = text.replace(/<[^>]*>/g, "");
    cleanText = cleanText.replace(/•/g, ", ");
    cleanText = cleanText.replace(/&nbsp;/g, " ");
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    
    const voices = window.speechSynthesis.getVoices();
    const desiredVoice = voices.find(voice => voice.lang.startsWith("en-") && voice.name.toLowerCase().includes("google"));
    if (desiredVoice) {
        utterance.voice = desiredVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// =============================================================
// AI SENTIMENT & DIAGNOSTIC ANALYZER
// =============================================================
function updateDiagStatus(statusText) {
    const diagStatus = document.getElementById("diagStatus");
    if (!diagStatus) return;
    
    diagStatus.textContent = statusText;
    diagStatus.className = "diag-value"; // reset
    
    if (statusText === "Idle" || statusText === "Online") {
        diagStatus.classList.add("status-online");
    } else if (statusText.includes("Listening") || statusText.includes("Processing")) {
        diagStatus.classList.add("status-analyzing");
    }
}

function analyzeQueryDiagnostics(query) {
    const text = query.toLowerCase();
    
    // 1. Sentiment/Intent Classification
    let sentiment = "Inquiring";
    if (text.includes("priorit") || text.includes("agile") || text.includes("scrum") || text.includes("roadmap") || text.includes("pm") || text.includes("product")) {
        sentiment = "Analytical (PM)";
    } else if (text.includes("sql") || text.includes("database") || text.includes("mysql") || text.includes("docker") || text.includes("redis") || text.includes("ops")) {
        sentiment = "Technical (Data)";
    } else if (text.includes("hello") || text.includes("hi") || text.includes("hey") || text.includes("greet")) {
        sentiment = "Friendly";
    } else if (text.includes("how") || text.includes("why") || text.includes("what")) {
        sentiment = "Curious";
    }
    
    const diagSentiment = document.getElementById("diagSentiment");
    if (diagSentiment) diagSentiment.textContent = sentiment;
    
    // 2. Keyword Match Rate
    const cvKeywords = [
        'product', 'pm', 'agile', 'scrum', 'sql', 'database', 'mysql', 
        'python', 'java', 'react', 'ide', 'intern', 'operations', 'analytics', 
        'docker', 'redis', 'automation', 'lpu', 'co-lab', 'learning', 'resume', 
        'contact', 'skills', 'certification'
    ];
    
    let matchesCount = 0;
    cvKeywords.forEach(keyword => {
        if (text.includes(keyword)) {
            matchesCount++;
        }
    });
    
    let matchPercentage = 0;
    if (matchesCount > 0) {
        matchPercentage = Math.min(100, 45 + (matchesCount * 15) + Math.floor(Math.random() * 10));
    } else {
        matchPercentage = Math.max(10, Math.floor(Math.random() * 15) + 5);
    }
    
    const diagMatchBar = document.getElementById("diagMatchBar");
    const diagMatchText = document.getElementById("diagMatchText");
    
    if (diagMatchBar && diagMatchText) {
        diagMatchBar.style.width = matchPercentage + "%";
        diagMatchText.textContent = matchPercentage + "%";
    }
    
    // 3. Response Latency Simulation
    const latency = Math.floor(Math.random() * 250) + 120; // 120ms - 370ms
    const diagLatency = document.getElementById("diagLatency");
    if (diagLatency) diagLatency.textContent = latency + "ms";
}