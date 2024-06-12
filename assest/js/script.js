//Nav bar---------------------------------------------------------------------------------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

AOS.init();

$(document).on("mousemove", function(e) {
    console.log(e.pageX, e.pageY);
    $(".mouseMove").css({
        left: e.pageX -22,
        top: e.pageY - 20
    });
});



// window.onscroll = function() {
//     var sections = document.querySelectorAll('section');
//     sections.forEach(function(section) {
//         var top = section.offsetTop;
//         var height = section.clientHeight;
//         if (window.pageYOffset >= top && window.pageYOffset < top + height) {
//             var id = section.getAttribute('id');
//             document.querySelector('nav a[href="#' + id + '"]').classList.add('active');
//         } else {
//             var id = section.getAttribute('id');
//             document.querySelector('nav a[href="#' + id + '"]').classList.remove('active');
//         }
//     });
// };


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
            showAllProjects();
        });
    });

    function showAllProjects(){
        desktopProjects.forEach(function(project) {
            project.style.display = "block";
        });
        uiProjects.forEach(function(project) {
            project.style.display = "block";
        });
        webProject.style.display = "block";
    }

    //projects------------------------------------
    var project=document.querySelector(".mixitup-active");
    var mixer=mixitup(project);
});