const scrollButton = document.getElementById("header_arrow");
const scrollToElement = document.getElementById("projects");
const scrollProjectsMenu = document.getElementById("projects_scroll");
const scrollNewsMenu = document.getElementById("news_scroll");
const scrollToSectionNews = document.getElementById("news");

scrollButton.addEventListener("click", function() {
    scrollToElement.scrollIntoView({behavior: "smooth"});
});

scrollProjectsMenu.addEventListener("click", function() {
    scrollToElement.scrollIntoView({behavior: "smooth"});
});

scrollNewsMenu.addEventListener("click", function() {
    scrollToSectionNews.scrollIntoView({behavior: "smooth"});
});

