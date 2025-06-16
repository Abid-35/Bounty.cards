window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let footer = document.querySelector(".footer");

    let navbarTop = navbar.offsetTop;
    let footerBottom = footer.offsetTop + footer.offsetHeight; 
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY;

    
    if (scrollY <= navbarTop) {
        window.scrollTo(0, navbarTop);
    }

    
    if (scrollY + windowHeight >= footerBottom) {
        window.scrollTo(0, footerBottom - windowHeight);
    }
});
