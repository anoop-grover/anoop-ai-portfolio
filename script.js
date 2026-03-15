const input = document.getElementById("commandInput");
const output = document.getElementById("output");

input.addEventListener("keydown", function(event){

if(event.key === "Enter"){

let command = input.value.toLowerCase();
let response = "";

if(command === "help"){
response = `
Available commands:<br>
about<br>
skills<br>
projects<br>
certifications<br>
hackathons<br>
resume<br>
contact
`;
}

else if(command === "about"){
response = `
Name: Anoop Grover<br>
Role: Aspiring Full Stack Developer<br>
University: Lovely Professional University<br>
Passionate about building interactive web applications.
`;
}

else if(command === "skills"){
response = `
Frontend: HTML, CSS, JavaScript<br>
Backend: PHP, MySQL<br>
Tools: Git, GitHub, VS Code<br>
Concepts: Data Structures, API Integration
`;
}

else if(command === "projects"){
response = `
1. Academic Potential Predictor<br>
AI-based system predicting employment potential.<br><br>

2. Echoes of the Unheard<br>
AI storytelling platform using Murf API.<br><br>

3. Personal Portfolio Website<br>
Interactive developer portfolio.
`;
}

else if(command === "resume"){
response = `
Download Resume:<br>
<a href="resume.pdf" target="_blank">Click here</a>
`;
}

else if(command === "contact"){
response = `
Email: anoopgrover@email.com<br>
GitHub: github.com/anoopgrover<br>
LinkedIn: linkedin.com/in/anoopgrover
`;
}

else{
response = "Command not recognized. Type 'help' to see commands.";
}

output.innerHTML += `<div>> ${command}</div>`;
output.innerHTML += `<div>${response}</div><br>`;

input.value = "";
}
});