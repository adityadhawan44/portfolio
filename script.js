// Smooth Scroll for Navigation Links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Animating Elements on Scroll (Fade-In Effect)
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.project, #about ul li');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            element.classList.add('animate');
        }
    });
});


// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scroll for All Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Ensures the element is aligned to the top of the viewport
        });
    });
});

// Animating Elements on Scroll (Fade-In Effect with IntersectionObserver)
const observerOptions = {
    root: null, // viewport as the root
    rootMargin: '0px',
    threshold: 0.1, // 10% of the element should be visible
};

// IntersectionObserver Callback
const fadeInObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
};

// Create IntersectionObserver instance
const fadeInObserver = new IntersectionObserver(fadeInObserverCallback, observerOptions);

// Observing target elements for fade-in animation
document.querySelectorAll('.project, #about ul li').forEach(element => {
    fadeInObserver.observe(element);
});


// Highlight Active Navigation Link
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// JavaScript for smooth scroll to section
document.getElementById('see-my-work').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    
    // Get the target section
    const targetSection = document.querySelector(this.getAttribute('href'));
    
    // Smooth scroll to the target section
    window.scrollTo({
        top: targetSection.offsetTop, // Position of the target section
        behavior: 'smooth' // Smooth scrolling
    });
});



