
        // Time slot selection
        const timeSlots = document.querySelectorAll('.time-slot');
        const preferredTimeInput = document.getElementById('preferredTime');

        timeSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                // Remove selected class from all slots
                timeSlots.forEach(s => s.classList.remove('selected'));
                // Add selected class to clicked slot
                this.classList.add('selected');
                // Set hidden input value
                preferredTimeInput.value = this.dataset.time;
            });
        });

        // Form submission
        document.getElementById('appointmentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if time slot is selected
            if (!preferredTimeInput.value) {
                alert('Please select a preferred time slot.');
                return;
            }

            // Here you would typically send the form data to your server
            alert('Thank you for your appointment request! We will contact you within 24 hours to confirm your appointment.');
            
            // Reset form
            this.reset();
            timeSlots.forEach(s => s.classList.remove('selected'));
            preferredTimeInput.value = '';
        });

        // Set minimum date to today
        document.getElementById('preferredDate').min = new Date().toISOString().split('T')[0];