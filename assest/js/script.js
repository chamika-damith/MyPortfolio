//Nav bar---------------------------------------------------------------------------------------
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Array.from(sections).forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            Array.from(navLinks).forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        };
    });
};



//projects section-----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const desktopLink = document.querySelector(".desktop-link");
    const webLink = document.querySelector(".web-link");
    const uiLink = document.querySelector(".ui-link");
    const allLinks = document.querySelectorAll(".all-link");
    const desktopProjects = document.querySelectorAll(".desktop-project");
    const webProject = document.querySelector(".web-project");
    const uiProjects = document.querySelectorAll(".ui-project");

    desktopLink.addEventListener("click", function(event) {
        event.preventDefault();
        desktopProjects.forEach(function(project) {
            project.style.display = "block";
        });
        uiProjects.forEach(function(project) {
            project.style.display = "none";
        });
        webProject.style.display = "none";
    });

    webLink.addEventListener("click", function(event) {
        event.preventDefault();
        desktopProjects.forEach(function(project) {
            project.style.display = "none";
        });
        uiProjects.forEach(function(project) {
            project.style.display = "none";
        });
        webProject.style.display = "block";
    });

    uiLink.addEventListener("click", function(event) {
        event.preventDefault();
        desktopProjects.forEach(function(project) {
            project.style.display = "none";
        });
        uiProjects.forEach(function(project) {
            project.style.display = "block";
        });
        webProject.style.display = "none";
    });

    allLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            desktopProjects.forEach(function(project) {
                project.style.display = "block";
            });
            uiProjects.forEach(function(project) {
                project.style.display = "block";
            });
            webProject.style.display = "block";
        });
    });
});
