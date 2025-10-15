// --- CURSOR LIGHT EFFECT ---
const cursorLight = document.getElementById('cursor-light');
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice()) {
    cursorLight.style.display = 'block';
    document.addEventListener('mousemove', (e) => {
        window.requestAnimationFrame(() => {
            cursorLight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    });
}

// --- RESPONSIVE HAMBURGER MENU ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// --- TYPEWRITER EFFECT ---
const typewriterElement = document.querySelector('.typewriter');
const texts = [
    "B.E Artificial Intelligence and Data Science student.",
    "SIH 2024 Finalist.",
    "an aspiring UI/UX Designer."
];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typewriterElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(texts.length > 0) setTimeout(type, 1000);
});

// --- SCROLL REVEAL ANIMATIONS ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// --- NAVBAR ACTIVE LINK & SCROLL-TO-TOP BUTTON ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.querySelector('.scroll-to-top');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
            });
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px'
});

sections.forEach(section => {
    navObserver.observe(section);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});


// --- FORM SUBMISSION DEMO ---
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo)');
    form.reset();
});

