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