let perPage = 8;
let idPage = 1;
let start = 0;
let end = perPage;
const project = [{
        id: 1,
        link: "https://gnutyud.github.io/Google/#",
        image: "./images/projects/Google.png",
        alt: "project1",
        category: "landing-page",
        name: "Google",
        desc: "Google search page"
    },
    {
        id: 2,
        link: "https://gnutyud.github.io/Project-4---FFC/",
        image: "./images/projects/Jsdocument.png",
        alt: "project2",
        category: "landing-page",
        name: "Javascript",
        desc: "Javascript documentation landing page"
    },
    {
        id: 3,
        link: "https://gnutyud.github.io/Project-3---FFC/index.html",
        image: "./images/projects/Netflix.png",
        alt: "project3",
        category: "landing-page",
        name: "Netflix",
        desc: "Just used HTML&CSS to clone it"
    },
    {
        id: 4,
        link: "https://gnutyud.github.io/Project-2-Survey-form/",
        image: "./images/projects/Survey Form.png",
        alt: "project4",
        category: "landing-page",
        name: "Survey form",
        desc: "The first form page that I've made"
    }
];

function renderProject(arr) {
    let html = '';
    for (var i = 0; i < project.length; i++) {
        html += '<a href="' + project[i].link + '" class="project-item-inner shadow-dark" data-category="' + project[i].category + '" target="_blank">';
        html += '<div class="project-img">';
        html += '<img src="' + project[i].image + '" alt="' + project[i].alt + '">';
        html += '</div>';
        html += '<div class="project-info">';
        html += '<h4>' + project[i].name + '</h4>';
        html += '<p>' + project[i].desc + '</p>';
        html += '</div>';
        html += '</a>';
    };
    document.getElementById('project-item').innerHTML = html;
}
renderProject(project);