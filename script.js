// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.destination-card, .package-card, .feature-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Booking form functionality
const bookingForm = document.querySelector('.booking-form');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const destination = document.querySelector('input[type="text"]').value;
    const type = document.querySelector('select').value;
    
    if (destination.trim() === '') {
        alert('Please enter a destination');
        return;
    }
    
    // Simulate search functionality
    alert(`Searching for ${type} packages in ${destination}...`);
});

// Package card hover effects
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// View button functionality
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const packageName = btn.parentElement.querySelector('h3').textContent;
        alert(`Viewing details for: ${packageName}`);
    });
});

// Read more button functionality
document.querySelector('.read-more-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Opening full blog post...');
});

// Enquiry button functionality
document.querySelector('.enquiry-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Opening enquiry form...');
});

// Social media links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('i').className.split(' ')[1];
        alert(`Opening ${platform} profile...`);
    });
});

// WhatsApp button functionality
document.querySelector('.whatsapp-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Opening WhatsApp chat...');
});

// TripAdvisor button functionality
document.querySelector('.tripadvisor-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Opening TripAdvisor profile...');
});

// Chat widget functionality
document.querySelector('.chat-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Opening live chat...');
});

// Form validation
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#28a745';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#007bff';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Testimonial carousel (simple version)
let currentTestimonial = 0;
const testimonials = [
    {
        text: "The trip was absolutely incredible! All the drivers and guides were experts and excellent at explaining the cities and local culture. Thank you very much for making our journey so memorable and enjoyable.",
        author: "Sarah Johnson",
        location: "United States"
    },
    {
        text: "Amazing experience from start to finish. The accommodations were perfect, the guides were knowledgeable, and the itinerary was well-planned. Highly recommend!",
        author: "Michael Chen",
        location: "Canada"
    },
    {
        text: "This was our first international trip and it exceeded all expectations. The team made everything seamless and we felt safe throughout our journey.",
        author: "Emma Rodriguez",
        location: "Australia"
    }
];

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const quoteElement = document.querySelector('.testimonial-quote p');
    const authorElement = document.querySelector('.author-name');
    const locationElement = document.querySelector('.author-location');
    
    quoteElement.textContent = testimonial.text;
    authorElement.textContent = testimonial.author;
    locationElement.textContent = testimonial.location;
}

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);

// Initialize testimonial
updateTestimonial();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Back to top functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to back to top button
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'scale(1.1)';
    backToTopBtn.style.background = '#218838';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'scale(1)';
    backToTopBtn.style.background = '#28a745';
}); 