// TrueBlue Solutions - Animations

// Initialize Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync GSAP ScrollTrigger with Lenis
gsap.registerPlugin(ScrollTrigger);

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Time display
function updateTime() {
    const timeEl = document.getElementById('nav-time');
    if (timeEl) {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Chicago',
            hour12: false
        };
        timeEl.textContent = now.toLocaleTimeString('en-US', options) + ' CST';
    }
}
updateTime();
setInterval(updateTime, 1000);

// Custom cursor
const cursor = document.getElementById('cursor');
const cursorText = cursor?.querySelector('.cursor-text');

if (cursor && window.innerWidth > 991) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Show cursor on interactive elements
    const interactiveElements = document.querySelectorAll('[data-cursor]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            if (cursorText) {
                cursorText.textContent = el.getAttribute('data-cursor');
            }
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

// Hero animation on load
window.addEventListener('load', () => {
    // Animate hero heading words
    const heroWords = document.querySelectorAll('.hero-heading .word');
    heroWords.forEach((word, i) => {
        gsap.to(word, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            delay: 0.3 + (i * 0.08),
            ease: 'power3.out'
        });
    });

    // Animate hero subtitle
    gsap.to('.hero-sub', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out'
    });
});

// Scroll-triggered animations
function initScrollAnimations() {
    // Section labels
    gsap.utils.toArray('.section-label').forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Section title words
    gsap.utils.toArray('.section-title, .contact-heading').forEach(title => {
        const words = title.querySelectorAll('.word');
        words.forEach((word, i) => {
            gsap.to(word, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 0.7,
                delay: i * 0.06,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
    });

    // Section subtitles
    gsap.utils.toArray('.section-subtitle, .contact-sub').forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Large text (about section)
    gsap.utils.toArray('.large-text').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Stats
    gsap.utils.toArray('.stat').forEach((el, i) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el.closest('.about-stats'),
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Tech cards
    gsap.utils.toArray('.tech-card').forEach((el, i) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // System items
    gsap.utils.toArray('.system-item').forEach((el, i) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Warranty items
    gsap.utils.toArray('.warranty-item').forEach((el, i) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el.closest('.warranty-grid'),
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Area items
    gsap.utils.toArray('.area-item').forEach((el, i) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el.closest('.areas-grid'),
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Contact actions
    gsap.to('.contact-actions', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-actions',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.2
            });
        }
    });
});
