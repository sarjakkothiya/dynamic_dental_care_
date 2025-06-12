        function toggleMobileMenu() {
            const sidebar = document.getElementById('mobileSidebar');
            const overlay = document.querySelector('.mobile-overlay');
            
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (sidebar.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        function closeMobileMenu() {
            const sidebar = document.getElementById('mobileSidebar');
            const overlay = document.querySelector('.mobile-overlay');
            
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        function toggleDropdown(element) {
            const dropdown = element.nextElementSibling;
            const isOpen = dropdown.classList.contains('open');
            
            // Close all other dropdowns
            document.querySelectorAll('.mobile-dropdown.open').forEach(dd => {
                dd.classList.remove('open');
                dd.previousElementSibling.classList.remove('open');
            });
            
            // Toggle current dropdown
            if (!isOpen) {
                dropdown.classList.add('open');
                element.classList.add('open');
            }
        }

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav-item:not(.has-dropdown), .mobile-dropdown a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });