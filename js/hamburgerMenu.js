// Activate Hamburger Menu

function hamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const sidebar = document.querySelector(".sidebar");
    const hide = document.querySelector("html");
    
    hamburger.addEventListener("click", mobileMenu);
    
    function mobileMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
        sidebar.classList.toggle("active");
        hide.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));
    
    function closeMenu() {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        sidebar.classList.remove("active");
        hide.classList.remove("active");
    }
}

hamburgerMenu();

swup.on('contentReplaced', hamburgerMenu);