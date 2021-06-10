let perPage = 8;
let idPage = 1;
let start = 0;
let end = perPage;
const project = [
  {
    id: 1,
    link: "https://gnutyud.github.io/Google/#",
    image: "./images/projects/Google.png",
    alt: "project1",
    category: "landing-page",
    name: "Google",
    desc: "Google search page",
  },
  {
    id: 2,
    link: "https://gnutyud.github.io/Project-4---FFC/",
    image: "./images/projects/Jsdocument.png",
    alt: "project2",
    category: "landing-page",
    name: "Javascript",
    desc: "Javascript documentation landing page",
  },
  {
    id: 3,
    link: "https://gnutyud.github.io/Calculator/",
    image: "./images/projects/Calculator.png",
    alt: "project3",
    category: "javascript",
    name: "Calculator",
    desc: "Just a simple calculator inspired from MS Calculator",
  },
  {
    id: 4,
    link: "https://gnutyud.github.io/Project-2-Survey-form/",
    image: "./images/projects/Survey Form.png",
    alt: "project4",
    category: "landing-page",
    name: "Survey form",
    desc: "The first form page that I've made",
  },
  {
    id: 5,
    link: "https://we-keep.herokuapp.com/",
    image: "./images/projects/we-keeper.png",
    alt: "We-Keeper",
    category: "javascript",
    name: "We Keeper",
    desc: "This is like a Google keep clone using Reactjs to built",
  },
  {
    id: 6,
    link: "https://gnutyud.github.io/E.M.A1302_Blog/",
    image: "./images/projects/blog.png",
    alt: "Blog",
    category: "landing-page",
    name: "Blog",
    desc: "This is a fashion blog",
  },
  {
    id: 7,
    link: "https://gnutyud.github.io/E.M.A1303_Landing-page/",
    image: "./images/projects/app.png",
    alt: "We-Keeper",
    category: "landing-page",
    name: "App product",
    desc: "This is an App product website",
  },
  {
    id: 8,
    link: "https://gnutyud.github.io/Weather_app/",
    image: "./images/projects/weather-app.png",
    alt: "Weather App",
    category: "javascript",
    name: "Weather App",
    desc: "Insprired by weather default on IOS",
  },
  {
    id: 9,
    link: "https://gnutyud.github.io/exam_Landing_page/",
    image: "./images/projects/exam-landing-page.png",
    alt: "landing page",
    category: "landing-page",
    name: "Product Landing Page",
    desc: "This was an exam HTML & CSS from FA",
  },
  {
    id: 10,
    link: "https://gnutyud.github.io/300_codes_for_kids/",
    image: "./images/projects/300-bai-code-thieu-nhi.png",
    alt: "300 Bai Code Thieu Nhi",
    category: "javascript",
    name: "300 Bài Code Thiếu Nhi",
    desc: "You can test your JavaScript skills with this Quiz.",
  },
];

function renderProject(arr) {
  let html = "";
  for (var i = 0; i < project.length; i++) {
    html +=
      '<a href="' +
      project[i].link +
      '" class="project-item-inner shadow-dark" data-category="' +
      project[i].category +
      '" target="_blank">';
    html += '<div class="project-img">';
    html += '<img src="' + project[i].image + '" alt="' + project[i].alt + '">';
    html += "</div>";
    html += '<div class="project-info">';
    html += "<h4>" + project[i].name + "</h4>";
    html += "<p>" + project[i].desc + "</p>";
    html += "</div>";
    html += "</a>";
  }
  document.getElementById("project-item").innerHTML = html;
}
renderProject(project);
