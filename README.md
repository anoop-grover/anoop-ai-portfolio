# 🌌 Anoop Grover — Interactive AI-Powered Developer Portfolio & HUD Command Center

[![GitHub License](https://img.shields.io/github/license/anoop-grover/anoop-ai-portfolio?style=for-the-badge&color=8b5cf6)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/anoop-grover/anoop-ai-portfolio?style=for-the-badge&color=3b82f6)](https://github.com/anoop-grover/anoop-ai-portfolio/stargazers)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-blueviolet?style=for-the-badge)](https://anoop-grover.github.io/anoop-ai-portfolio/)

Welcome to my personal developer portfolio, re-engineered from the ground up as a **Futuristic AI Command Center**. Built using clean, vanilla HTML5, CSS3, and JavaScript, this website showcases my experience in **Technical Product Management**, **Data Operations**, and **Software Engineering** through dynamic interface elements and native AI features.

👉 **[Live Demo Website](https://anoop-grover.github.io/anoop-ai-portfolio/)**

---

## ⚡ Key Interactive & AI Features

### 🎙️ 1. Voice-Activated AI Assistant (STT & TTS)
- **Vocal Recognition (STT)**: Integration of the browser's `SpeechRecognition` API. Clicking the microphone button lets recruiters speak their questions, transcribing inputs dynamically.
- **Robotic Synthesis (TTS)**: Integration of the `speechSynthesis` API to speak answers aloud in a clean voice, automatically filtering out HTML tag formats (`<strong>`, `<br>`, `•`).
- **Submission Guard Lock**: Uses `isFinal` checks and `hasSubmittedVoiceQuery` debounce guards to guarantee clean single-query submissions, solving double-response triggers on Chrome.
- **Mute Toggle**: A custom volume toggle buttons in the header that mutes/unmutes synthesis, persisting state across sessions via `localStorage`.

### 📊 2. Holographic Chatbot Diagnostics Panel
- **Split-HUD Layout**: The chatbot card splits into a dual-column flex container. Left side runs the active message thread, right side runs a real-time AI metrics hud.
- **Query Sentiment Classifier**: Dynamically parses input messages to classify user intent (e.g. *Analytical PM, Technical Data, Friendly, Curious*).
- **Skill Compatibility Score**: Compares query keywords against my CV skills to render a glowing compatibility score progress bar.
- **Latency & Processing Indicators**: Simulates real-time processing states (*Idle*, *Listening...*, *Processing...*) and latency (120ms - 370ms) to mimic active cloud compute cycles.

### 🌐 3. Interactive "AI Neural Network" Particle Background
- **HTML5 Canvas Loop**: A full-screen fixed background canvas running a 60fps render loop of floating glowing nodes.
- **Cursor Gravity**: Tracked cursor coordinates act as local gravity nodes, drawing thin, glowing connection lines to nearby particles and pulling them smoothly as you navigate.
- **Theme Adapting**: Colors dynamically transition opacity and hue to blend perfectly with Dark Mode or Light Mode configurations.

### 📈 4. 3D-Tilt Holographic Stats Dashboard
- **3D Parallax Hover Tilt**: Hovering your cursor over the Stats Card tracks cursor offsets to apply horizontal and vertical rotations, creating a holographic tilting effect.
- **LeetCode View**: Displays animated stroke progress rings and counts up solved statistics (Easy: 180, Med: 220, Hard: 50) and rating (**1615** — Top 20% globally).
- **Interactive SVG Radar Chart**: Renders a dynamic vector spider chart representing language competencies (SQL, Python, JavaScript, Java, C++). Hovering over any vertex displays detailed competency ratios and background experience notes.

### 🐚 5. Retro Developer Terminal Mode
- **Matrix Easter Egg**: Typing `/terminal` in the chatbot or clicking the shell icon opens a vintage CLI terminal view.
- **Digital Rain**: Renders an interactive green falling-character code overlay on a secondary canvas.
- **CLI Utilities**: Supports commands like `help`, `about`, `skills`, `pm`, `data`, `projects`, `clear`, `exit`, and `matrix` to control rain intensity.

---

## 💼 Core Credentials & CV Highlights

- **Lovely Professional University (LPU)**: Pursuing a B.Tech in Computer Science and Engineering (Current CGPA: 7.53).
- **Database & Data Operations Intern**: Imported, cleaned, and updated **30,000+ alumni records** in MySQL relational databases. Set up query pipelines, handled duplicates, and designed parameter-based outreach reports.
- **Core Skillsets**:
  - **Languages**: SQL, Python, Java, JavaScript, C++
  - **Web & Systems**: React.js, Node.js, Express.js, WebSockets, Docker compilation, Redis caching, BullMQ queues, Git/Linux
  - **Product Management**: Backlog Prioritization, Agile Sprints, User Story Elaboration, Competitor Benchmarking

---

## 🚀 Projects Showcased

1. **Co-Lab IDE (Collaborative Code Editor)**
   - Real-time collaborative code compilation platform.
   - Built with WebSockets, React frontend, Node backend, Docker compiling environments, Redis buffers, and BullMQ background task runners.
2. **AI Personalized Learning Platform**
   - Web application providing tailored curriculum roadmaps using AI models.
   - Employs React, Node, and REST API services.

---

## ⚙️ Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/anoop-grover/anoop-ai-portfolio.git
   ```
2. Open the directory:
   ```bash
   cd anoop-ai-portfolio
   ```
3. Run using any static local server (e.g. VS Code Live Server or python standard server):
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and navigate to `http://localhost:8000`.

---

Developed with passion by **Anoop Grover**. Let's build something innovative!


