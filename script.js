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