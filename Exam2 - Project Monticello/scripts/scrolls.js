const scrollButton = document.getElementById("header_arrow");
const scrollToElement = document.getElementById("projects");
const scrollProjectsMenu = document.getElementById("projects_scroll");

scrollButton.addEventListener("click", function() {
    scrollToElement.scrollIntoView({behavior: "smooth"});
});

scrollProjectsMenu.addEventListener("click", function() {
    scrollToElement.scrollIntoView({behavior: "smooth"});
});

