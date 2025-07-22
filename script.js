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

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Contact form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for scroll animations
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Project cards hover effect
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Skills animation on scroll
        const skillsSection = document.querySelector('#skills');
        const skillTags = document.querySelectorAll('.skill-tag');

        const skillsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillTags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.style.opacity = '1';
                            tag.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.5 });

        skillTags.forEach(tag => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });

        skillsObserver.observe(skillsSection);

        // Add typing effect to hero tagline
        const tagline = document.querySelector('.hero .tagline');
        const originalText = tagline.textContent;
        tagline.textContent = '';

        function typeWriter(text, element, speed = 50) {
            let i = 0;
            function typing() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typing, speed);
                }
            }
            typing();
        }

        // Start typing animation after hero animations
        setTimeout(() => {
            typeWriter(originalText, tagline, 30);
        }, 1500);

        // Add floating animation to shapes
        function createFloatingShapes() {
            const hero = document.querySelector('.hero');
            const shapesContainer = document.querySelector('.floating-shapes');
            
            // Create additional floating elements
            for (let i = 4; i <= 8; i++) {
                const shape = document.createElement('div');
                shape.className = 'shape';
                shape.style.width = Math.random() * 60 + 40 + 'px';
                shape.style.height = shape.style.width;
                shape.style.top = Math.random() * 80 + '%';
                shape.style.left = Math.random() * 80 + '%';
                shape.style.animationDelay = Math.random() * 6 + 's';
                shape.style.animationDuration = (Math.random() * 4 + 4) + 's';
                shapesContainer.appendChild(shape);
            }
        }

        // Initialize floating shapes
        createFloatingShapes();

        // Add parallax effect to hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const shapes = document.querySelectorAll('.shape');
            
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            
            shapes.forEach((shape, index) => {
                const speed = 0.1 + (index * 0.05);
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Add download resume functionality
        document.querySelector('a[href="#"]:has(i.fa-download)').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume download will be available soon! Please contact me directly for now.');
        });

        // Add GitHub profile link functionality
        document.querySelectorAll('a[href="https://github.com/chandrakantbambarde"]').forEach(link => {
            link.addEventListener('click', function(e) {
                // In a real scenario, this would open the actual GitHub profile
                console.log('Opening GitHub profile...');
            });
        });

        // Add copy email functionality
        document.querySelector('.contact-item:has(.fa-envelope) p').addEventListener('click', function() {
            const email = this.textContent;
            navigator.clipboard.writeText(email).then(function() {
                const originalText = this.textContent;
                this.textContent = 'Email copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }.bind(this));
        });

        // Add mobile menu toggle (for future mobile optimization)
        const createMobileMenu = () => {
            const navbar = document.querySelector('.nav-container');
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            menuToggle.style.display = 'none';
            
            // Add mobile-specific styles
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 768px) {
                    .mobile-menu-toggle {
                        display: block !important;
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        color: #667eea;
                        cursor: pointer;
                    }
                    .nav-links.mobile-open {
                        display: flex !important;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: white;
                        flex-direction: column;
                        padding: 1rem;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    }
                }
            `;
            document.head.appendChild(style);
            
            navbar.appendChild(menuToggle);
            
            menuToggle.addEventListener('click', () => {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('mobile-open');
            });
        };

        createMobileMenu();