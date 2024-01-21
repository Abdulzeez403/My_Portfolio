// Can also be included with a regular script tag
// import data from "./data"
const Projects = [
    {
        id: 1,
        title: "Cleverchat LandingPage",
        img: "./projectimg/project2.png",
        desc: " This is a cleverchat landingPage built for a startup coding academcy. it is responsive and clean. Bult with React js and tailwind",
        websiteLink: "https://cleverchat.netlify.app/ ",
        githubLink: ""
    },
    {
        id: 2,
        title: "Advance_Todolist",
        img: "./projectimg/Todo_App.png",
        desc: "Todolist built with Javascript Framework(React js) and CSS Framework (Tailwind).I used Figma to desgin the UI before coding it out! ",
        websiteLink: "https://advancetodolistwithreact.netlify.app/ ",
        githubLink: ""
    }, {
        id: 3,
        title: "UX Portfolio",
        img: "./projectimg/project1.png",
        desc: " This website was build for a ui and ux portfolio with few feature such as work done, profile details! bultwith HTML and CSS no framework. ",
        websiteLink: "https://softteamer.netlify.app ",
        githubLink: ""
    }
]


const container = document.querySelector(".projectContainer");

Projects.forEach(item => {
    const projectElement = document.createElement("div");
    projectElement.className = "project-Items";
    projectElement.className = "project-image";
    projectElement.className = "project-name";
    projectElement.className = "project-description";
    projectElement.className = "project-btn";
    projectElement.innerHTML = `

      <div class="project-Items">
          <div>
            <img src="${item.img}" alt="${item.title} " class="project-image">
          </div>
          <div>
          <h4 class="project-name">${item.title}</h4>
          <p class="project-description">${item.desc}</p>

           <div class="project-btn">
           
            <a href="${item.websiteLink}" target="_blank">
            <button class="pro-btn">Explore</button>
            </a>
          </div>

          </div>
          </div> `;
    container.appendChild(projectElement);
});


const snipper = document.querySelector('.Skeleton');
setTimeout(() => {
    snipper.style.display = "none";
}, 2000)











