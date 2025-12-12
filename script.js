// Basic Script for Personal Portfolio

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Close Mobile Menu on Click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.getElementById('navbarNav');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
            // Only collapse if on mobile (toggler is visible)
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
});

// Smooth Scrolling for Anchor Links (Optional, CSS scroll-behavior usually handles this)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

console.log("Portfolio loaded successfully.");
