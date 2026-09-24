/* ===========================================
   LOAD DATA
=========================================== */

let projects = [];
let certifications = [];
let learning = [];

async function loadData() {

    try {

        const projectRes = await fetch("data/projects.json");
        projects = await projectRes.json();

        const certRes = await fetch("data/certificates.json");
        certifications = await certRes.json();

        const learningRes = await fetch("data/learning.json");
        learning = await learningRes.json();

        renderProjects();
        renderCertificates();
        renderLearning();

    }

    catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", loadData);



/* ===========================================
   PROJECTS
=========================================== */

function renderProjects() {

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    projects.forEach(project => {

        container.innerHTML += `

        <div class="project-card">

            <div class="project-image">

                <img src="${project.image}" alt="${project.title}">

            </div>

            <div class="project-content">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-tech">
                ${project.technologies
                    .map(tech => `<span class="tech-tag">${tech}</span>`)
                    .join("")}
                </div>

                <a class="btn"
                   href="${project.pdf}"
                   target="_blank">

                    View Case Study

                </a>

                <div class="project-links">

                    <a href="${project.github}"
                       target="_blank">

                        <i class="fas fa-code"></i>

                    </a>

                    <a href="${project.youtube}"
                       target="_blank">

                        <i class="fab fa-youtube"></i>

                    </a>

                </div>

            </div>

        </div>

        `;

    });

}



/* ===========================================
   CERTIFICATES
=========================================== */

function renderCertificates(){

    const container =
    document.getElementById("certifications-container");

    container.innerHTML="";

    certifications.forEach(cert=>{

        let skills="";

        cert.skills.forEach(skill=>{

            skills+=`<span>${skill}</span>`;

        });

        container.innerHTML+=`

        <a href="${cert.pdf}"

           target="_blank"

           class="certificate-card">

            <img src="${cert.image}">

            <div class="certificate-content">

                <h3>${cert.title}</h3>

                <div class="skill-tags">

                    ${skills}

                </div>

            </div>

        </a>

        `;

    });

}



/* ===========================================
   LEARNING
=========================================== */

function renderLearning(){

    const container =
    document.getElementById("learning-container");

    container.innerHTML="";

    learning.forEach(category=>{

        let html=`

        <div class="learning-category">

        <h3>${category.category}</h3>

        <div class="learning-grid">

        `;

        category.resources.forEach(item=>{

            html+=`

            <a href="${item.link}"

               target="_blank"

               class="learning-card">

                <img src="${item.image}">

                <h4>${item.title}</h4>

            </a>

            `;

        });

        html+=`

        </div>

        </div>

        `;

        container.innerHTML+=html;

    });

}