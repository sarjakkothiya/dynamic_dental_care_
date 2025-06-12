        function toggleFAQ(index) {
            const faqItems = document.querySelectorAll('.faq-item');
            const currentItem = faqItems[index];
            const isActive = currentItem.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach((item, i) => {
                if (i !== index) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                currentItem.classList.remove('active');
            } else {
                currentItem.classList.add('active');
            }
        }