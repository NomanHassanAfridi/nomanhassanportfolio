// JavaScript for showing/hiding the "About Me" section
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const aboutButton = document.getElementById("toggleAbout");

    aboutButton.addEventListener("click", function() {
        aboutSection.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const servicesSection = document.getElementById("services");
    servicesSection.style.opacity = "0";

    setTimeout(function() {
        servicesSection.style.transition = "opacity 1s";
        servicesSection.style.opacity = "1";
    }, 1000);
});
