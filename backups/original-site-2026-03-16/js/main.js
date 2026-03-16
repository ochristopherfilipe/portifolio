// ===== PRELOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hide');
        
        // Animate hero text after preloader
        setTimeout(() => {
            document.querySelectorAll('.reveal-text').forEach(el => {
                el.classList.add('active');
            });
        }, 500);
    }, 1000);
});

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

// ===== MOBILE MENU =====
document.querySelector('.menu-mobile').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav ul').classList.remove('active');
    });
});

// ===== SCROLL REVEAL =====
function revealElements() {
    const elements = document.querySelectorAll('.section-header, .skill, .servico-card, .projeto-card, .video-card, .contato-info, .contato-form');
    
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ===== SKILL PROGRESS =====
function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        const elementTop = skill.getBoundingClientRect().top;
        const elementBottom = skill.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 50 && elementBottom > 0) {
            const progress = skill.querySelector('.progress');
            const width = progress.dataset.width;
            
            progress.style.width = width;
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', () => {
    setTimeout(animateSkills, 1500);
});

// ===== SMOOTH SCROLL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE NAVIGATION =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ===== FORM VALIDATION =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('assunto').value;
        const message = document.getElementById('mensagem').value;
        
        if (name && email && subject && message) {
            // Form is valid, you can add AJAX submission here
            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

// ===== 3D BACKGROUND =====
document.addEventListener('DOMContentLoaded', () => {
    if (typeof VANTA !== 'undefined' && VANTA.NET) {
        VANTA.NET({
            el: '#vanta-background',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x6c63ff,
            backgroundColor: 0x050816,
            points: 10.00,
            maxDistance: 25.00,
            spacing: 16.00
        });
    }
});

// ===== GSAP ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
        
        // Animate service cards
        gsap.utils.toArray('.servico-card').forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
        
        // Animate project cards
        gsap.utils.toArray('.projeto-card').forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }
});

// ===== CAROUSEL DE VÍDEOS =====
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    let currentIndex = 0;
    let isTransitioning = false;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToSlide(idx) {
        if (isTransitioning || idx === currentIndex || idx < 0 || idx >= slides.length) return;
        isTransitioning = true;
        currentIndex = idx;
        updateCarousel();
        setTimeout(() => { isTransitioning = false; }, 600);
    }

    prevBtn.addEventListener('click', () => {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
    });
    nextBtn.addEventListener('click', () => {
        goToSlide((currentIndex + 1) % slides.length);
    });
    indicators.forEach((dot, idx) => {
        dot.addEventListener('click', () => goToSlide(idx));
    });

    // Swipe para mobile
    let startX = 0;
    let isSwiping = false;
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });
    track.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        let dx = e.touches[0].clientX - startX;
        if (Math.abs(dx) > 50) {
            if (dx > 0) prevBtn.click();
            else nextBtn.click();
            isSwiping = false;
        }
    });
    track.addEventListener('touchend', () => { isSwiping = false; });

    updateCarousel();
}); 