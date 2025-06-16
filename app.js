window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar"); // Change this to your actual navbar class or ID
    let footer = document.querySelector(".footer"); // Change this to your actual footer class or ID

    let navbarTop = navbar.offsetTop;
    let footerBottom = footer.offsetTop + footer.offsetHeight; // Get footer's bottom position
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY;

    // Stop scrolling upwards beyond navbar
    if (scrollY <= navbarTop) {
        window.scrollTo(0, navbarTop);
    }

    // Stop scrolling downwards exactly when reaching footer bottom
    if (scrollY + windowHeight >= footerBottom) {
        window.scrollTo(0, footerBottom - windowHeight);
    }
});
