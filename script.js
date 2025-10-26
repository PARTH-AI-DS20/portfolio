// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections with fade-in-section class
document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 14, 39, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 14, 39, 0.9)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});


// Typing animation for job titles
const jobTitles = [
    'MLOps Engineer',
    'Data Engineer',
    'DevOps Engineer',
    'Machine Learning Engineer',
    'ML & Infra Engineer'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.querySelector('.dynamic-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeJobTitle() {
    const currentTitle = jobTitles[titleIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        dynamicText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentTitle.length) {
        speed = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % jobTitles.length;
    }
    
    setTimeout(typeJobTitle, speed);
}

// Start typing animation
typeJobTitle();


// Header scroll effect with professional styling
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// Animated counter for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

// Run counter animation on load
window.addEventListener('load', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (!isNaN(target)) {
            animateCounter(stat, target);
        }
    });
});


// Contact Form Handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you can add your form submission logic
    // For now, we'll just show a success message
    alert('Thank you for reaching out! I\'ll get back to you within 24 hours.');
    
    // Reset form
    this.reset();
});


// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.pointerEvents = 'none';
        }
    });

    // Scroll to top on click
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      formMessage.style.display = 'block';
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please fill out all required fields correctly.';
      return;
    }

    // Implement your AJAX or email sending logic here

    formMessage.style.display = 'block';
    formMessage.style.color = 'limegreen';
    formMessage.textContent = 'Thank you for reaching out! I will respond within 24 hours.';
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  document.querySelectorAll(".certificate-card").forEach(card => observer.observe(card));
});
