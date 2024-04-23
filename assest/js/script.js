document.addEventListener("DOMContentLoaded", function() {
    const desktopLink = document.querySelector(".desktop-link");
    const desktopProjects = document.querySelectorAll(".desktop-project");
    const webProject = document.querySelector(".web-project");

    desktopLink.addEventListener("click", function(event) {
        event.preventDefault();
        desktopProjects.forEach(function(project) {
            project.style.display = "block";
        });
        webProject.style.display = "none";
    });
});