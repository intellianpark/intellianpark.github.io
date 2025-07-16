// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const animateProgressBars = function() {
        progressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const barBottom = bar.getBoundingClientRect().bottom;
            
            if (barTop < window.innerHeight && barBottom > 0) {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    // Initial animation
    animateProgressBars();
    
    // Animate on scroll
    window.addEventListener('scroll', animateProgressBars);

    // Card hover effects enhancement
    const cards = document.querySelectorAll('.project-card, .member-card, .deliverable-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('member-card') 
                ? 'translateX(10px)' 
                : 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('member-card') 
                ? 'translateX(0)' 
                : 'translateY(0)';
        });
    });

    // Timeline item click effects
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            timelineItems.forEach(i => i.classList.remove('timeline-active'));
            // Add active class to clicked item
            this.classList.add('timeline-active');
        });
    });

    // Deliverable status tooltips
    const deliverableCards = document.querySelectorAll('.deliverable-card');
    
    deliverableCards.forEach(card => {
        const status = card.querySelector('.deliverable-status');
        const date = card.querySelector('.deliverable-date');
        
        if (status && date) {
            card.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = `예정일: ${date.textContent}`;
                tooltip.style.cssText = `
                    position: absolute;
                    background: #333;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    z-index: 1000;
                    top: -40px;
                    left: 50%;
                    transform: translateX(-50%);
                    white-space: nowrap;
                `;
                
                this.style.position = 'relative';
                this.appendChild(tooltip);
            });
            
            card.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        }
    });

    // Add loading animation
    const addLoadingAnimation = function() {
        const elements = document.querySelectorAll('.project-card, .member-card, .timeline-item, .deliverable-card');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };
    
    // Run loading animation
    addLoadingAnimation();

    // Add scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add active class to current navigation item
    const addActiveNavClass = function() {
        const currentSection = window.location.hash || '#projects';
        navItems.forEach(item => {
            if (item.getAttribute('href') === currentSection) {
                item.classList.add('active');
            }
        });
    };
    
    addActiveNavClass();
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav a.active {
        background: rgba(255,255,255,0.2);
        padding: 8px 16px;
        border-radius: 20px;
    }
    
    .timeline-active .timeline-content {
        border: 2px solid #667eea;
        transform: scale(1.02);
    }
    
    .scroll-to-top:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }
`;
document.head.appendChild(style); 