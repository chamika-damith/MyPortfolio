document.addEventListener("DOMContentLoaded", function() {
    const desktopLink = document.querySelector(".desktop-link");
    const webLink=document.querySelector(".web-link");
    const allLinks = document.querySelectorAll(".all-link");
    const desktopProjects = document.querySelectorAll(".desktop-project");
    const webProject = document.querySelector(".web-project");

    desktopLink.addEventListener("click", function(event) {
        event.preventDefault();
        desktopProjects.forEach(function(project) {
            project.style.display = "block";
        });
        webProject.style.display = "none";
    });

    webLink.addEventListener("click", function(event) {
        event.preventDefault();
        desktopProjects.forEach(function(project) {
            project.style.display = "none";
        });
        webProject.style.display = "block";
    });

    allLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            desktopProjects.forEach(function(project) {
                project.style.display = "block";
            });
            webProject.style.display = "block";
        });
    });
});
