// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavbar();
    initCurriculumToggle();
    initSmoothScrolling();
    initAnimations();
    initContactForm();
    initTypewriterEffect();
    initParallaxEffects();
    initCounterAnimations();
    initPreloader();
});

// Preloader
function initPreloader() {
    // Create preloader if it doesn't exist
    if (!document.querySelector('.preloader')) {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="preloader-content">
                <div class="spinner"></div>
                <div class="loading-text">Loading CSE Department...</div>
            </div>
        `;
        document.body.appendChild(preloader);
        
        // Add preloader styles
        const style = document.createElement('style');
        style.textContent = `
            .preloader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--dark);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                opacity: 1;
                transition: opacity 0.5s ease;
            }
            .preloader.fade-out {
                opacity: 0;
                pointer-events: none;
            }
            .preloader-content {
                text-align: center;
            }
            .spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(0, 245, 255, 0.3);
                border-top: 3px solid var(--primary);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            .loading-text {
                color: var(--primary);
                font-family: 'Orbitron', monospace;
                font-size: 1.2rem;
                animation: pulse 2s ease-in-out infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes pulse {
                0%, 100% { opacity: 0.7; }
                50% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Hide preloader after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }
        }, 1000);
    });
}

// Navbar Functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// Curriculum Toggle
function initCurriculumToggle() {
    const toggleButtons = document.querySelectorAll('.btn-toggle');
    const contents = document.querySelectorAll('.curriculum-content');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all buttons
            toggleButtons.forEach(b => b.classList.remove('active'));
            // Hide all contents
            contents.forEach(c => c.classList.remove('active'));
            // Activate clicked button and corresponding content
            btn.classList.add('active');
            const reg = btn.getAttribute('data-regulation');
            document.getElementById('curriculum-' + reg).classList.add('active');
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initAnimations() {
    // Add your animation initialization code here
    document.querySelectorAll('.section').forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });
        observer.observe(section);
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission code here
    });
}

// Typewriter Effect
function initTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(el => {
        const text = el.innerHTML;
        el.innerHTML = '';
        let index = 0;
        function type() {
            if (index < text.length) {
                el.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed');
            el.style.transform = 'translateY(' + (scrollPosition * speed) + 'px)';
        });
    });
}

// Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// No changes needed here for modal/typewriter (handled in HTML inline script)
