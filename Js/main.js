// projects filter items
const filterContainer = document.querySelector(".project-filter"),
  filterBtn = filterContainer.children,
  totalFilterBtn = filterBtn.length,
  projectItems = document.querySelectorAll(".project-item-inner"),
  totalProjectItem = projectItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
  filterBtn[i].addEventListener("click", function () {
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
  navMenuBtn = navMenu.getElementsByClassName("nav-menu-link"),
  section = document.querySelectorAll(".section");
for (var m = 0; m < navMenuBtn.length; m++) {
  navMenuBtn[m].addEventListener("click", function () {
    navMenu.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    // for responsive mobile device when click on the menu section
    // then auto close nav bar to show the main content
    document.querySelector(".navside").classList.toggle("open");
    document.querySelector(".nav-toggler").classList.toggle("open");
    document.querySelector(".main-content").classList.toggle("open");
    showSection(this);
  });
}
// when click on Hire Me button then show the Contact section
const hire_btn = document.getElementById("hire-btn");
hire_btn.addEventListener("click", function () {
  showSection(this);
});
// show section function
function showSection(el) {
  const href = el.getAttribute("href").split("#")[1];
  console.log(href);
  for (var i = 0; i < section.length; i++) {
    section[i].classList.add("hidden");
  }
  document.querySelector("#" + href).classList.remove("hidden");
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
document
  .querySelector(".toggle-setting")
  .addEventListener("click", function () {
    document.querySelector(".skin-body-box").classList.toggle("open");
  });
// nav toggler
document.querySelector(".nav-toggler").addEventListener("click", function () {
  document.querySelector(".navside").classList.toggle("open");
  document.querySelector(".nav-toggler").classList.toggle("open");
  document.querySelector(".main-content").classList.toggle("open");
});
// darkmode click
const darkmode = document.querySelectorAll(".darkmode-style");
for (var i = 0; i < darkmode.length; i++) {
  darkmode[i].addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  });
}
