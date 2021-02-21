console.log(why it does not work ? ? ? )
let perPage = 8;
let idPage = 1;
let start = 0;
let end = perPage;
const project = [{
        id: 1,
        link: "#",
        image: "./images/projects/1.jpg",
        alt = "project-1",
        category = "landing-page",
        name: "Netflix",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        link: "#",
        image: "./images/projects/2.jpg",
        alt = "project-2",
        category = "javascript",
        name: "Countdown Timer",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }
];

function renderProject(project) {
    let html = '';
    const content = project.map((item, index) => {
        if (index >= start && index < end) {
            html += '<a href=' + item.link + ' class="project-item-inner shadow-dark" data-category=' + item.category + '>';
            html += '<div class="project-img">';
            html += '<img src=' + item.image + ' alt=' + item.alt + '>';
            html += '</div>';
            html += '<div class="project-info">';
            html += '<h4>' + item.name + '</h4>';
            html += '<p>' + item.desc + '</p>';
            html += '</div>';
            html += '</a>';
            console.log(html)
            return html;
        }
    });
    document.getElementById('project-item').innerHTML = html;
}
renderProject();