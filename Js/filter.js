// projects filter items
const filterContainer = document.querySelector(".project-filter"),
    filterBtn = filterContainer.children,
    totalFilterBtn = filterBtn.length,
    projectItems = document.querySelectorAll(".project-item-inner"),
    totalProjectItem = projectItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
    filterBtn[i].addEventListener("click", function() {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let j = 0; j < totalProjectItem; j++) {
            if (filterValue === projectItems[j].getAttribute("data-category")) {
                projectItems[j].classList.add("show");
                projectItems[j].classList.remove("hide");
            } else {
                projectItems[j].classList.add("hide");
                projectItems[j].classList.remove("show");
            }
            if (filterValue === "all") {
                projectItems[j].classList.add("show");
                projectItems[j].classList.remove("hide");
            }
        }
    });
}
// active nav menu buttons
const navMenu = document.querySelector(".nav-menu"),
    navMenuBtn = document.getElementsByClassName("nav-menu-link");
for (var m = 0; m < navMenuBtn.length; m++) {
    navMenuBtn[m].addEventListener("click", function() {
        navMenu.querySelector(".active").classList.remove("active");
        this.classList.add("active");
    })
}
// switcher skin color
const links = document.getElementsByClassName("color-link");

function swichColor(color) {
    for (var i = 0; i < links.length; i++) {
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }
    }
}
// setting btn toggle
document.querySelector(".toggle-setting").addEventListener("click", function() {
        document.querySelector(".skin-body-box").classList.toggle("open");
    })
    // darkmode click
const darkmode = document.querySelectorAll(".darkmode-style");
for (var i = 0; i < darkmode.length; i++) {
    darkmode[i].addEventListener("change", function() {
        if (this.value === "dark") {
            document.body.className = "dark";
        } else {
            document.body.className = "";
        }
    })

}