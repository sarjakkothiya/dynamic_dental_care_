/* ---------- DOCUMENT READY SECTION START ---------- */
document.addEventListener('DOMContentLoaded', function() {
    /* ---------- SLIDER FUNCTIONALITY START ---------- */
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000);
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
            resetInterval();
        });
    });
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    function goToSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    /* ---------- SLIDER FUNCTIONALITY END ---------- */
    
    /* ---------- DROPDOWN MENU FUNCTIONALITY START ---------- */
    const navItems = document.querySelectorAll('.nav-item');
    
    if (window.matchMedia('(min-width: 769px)').matches) {
        navItems.forEach(navItem => {
        });
    }
    
    const dropdownLinks = document.querySelectorAll('.dropdown');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();
                
                const navItem = this.closest('.nav-item');
                
                const dropdownContent = navItem.querySelector('.dropdown-content');
                
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                } else {
                    document.querySelectorAll('.dropdown-content').forEach(content => {
                        content.classList.remove('show');
                    });
                    
                    dropdownContent.classList.add('show');
                }
            }
        });
    });
    /* ---------- DROPDOWN MENU FUNCTIONALITY END ---------- */
    
    /* ---------- MOBILE MENU TOGGLE START ---------- */
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.classList.remove('show');
                });
            }
        });
    }
    /* ---------- MOBILE MENU TOGGLE END ---------- */
    
    /* ---------- DOCUMENT CLICK HANDLER START ---------- */
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.classList.remove('show');
                });
            }
        }
    });
    /* ---------- DOCUMENT CLICK HANDLER END ---------- */
    
    /* ---------- MOBILE STYLES FUNCTIONALITY START ---------- */
    function updateMobileStyles() {
        const navItems = document.querySelectorAll('.nav-item');
        
        if (window.innerWidth <= 768) {
            navItems.forEach(item => {
                item.style.width = '100%';
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.style.width = '100%';
                    dropdown.style.padding = '12px 20px';
                    dropdown.style.borderBottom = '1px solid #f1f1f1';
                    dropdown.style.display = 'block';
                }
            });
        } else {
            navItems.forEach(item => {
                item.style.width = '';
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.style.width = '';
                    dropdown.style.padding = '';
                    dropdown.style.borderBottom = '';
                    dropdown.style.display = '';
                }
            });
        }
    }
    /* ---------- MOBILE STYLES FUNCTIONALITY END ---------- */
    
    /* ---------- WINDOW RESIZE HANDLER START ---------- */
    window.addEventListener('resize', function() {
        updateMobileStyles();
        if (window.innerWidth > 768) {
            if (navMenu) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
    /* ---------- WINDOW RESIZE HANDLER END ---------- */
    
    updateMobileStyles();
});
/* ---------- DOCUMENT READY SECTION END ---------- */