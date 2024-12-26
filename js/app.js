// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    let isFlipped = false;
    let touchStartX = 0;
    
    // Manejador para dispositivos táctiles
    card.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    card.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        // Si el usuario hace un gesto de deslizamiento
        if (Math.abs(diff) > 50) {
            isFlipped = !isFlipped;
            const inner = card.querySelector('.project-card-inner');
            inner.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0)';
        }
    });

    // Manejador para mouse
    card.addEventListener('mouseenter', () => {
        const inner = card.querySelector('.project-card-inner');
        inner.style.transform = 'rotateY(180deg)';
    });

    card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('.project-card-inner');
        inner.style.transform = 'rotateY(0)';
    });
});



