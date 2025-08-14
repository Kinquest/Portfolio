// scripts.js - Custom JS for Joaquin's IT Tech Support Portfolio

document.addEventListener('DOMContentLoaded', function () {
    // Animate menu links on click
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    // Smooth scroll with animation
    document.querySelectorAll('a.menu-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                target.classList.add('animate__animated', 'animate__fadeInUp');
                setTimeout(() => {
                    target.classList.remove('animate__animated', 'animate__fadeInUp');
                }, 1200);
            }
        });
    });

    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('formAlert');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showAlert('Please fill in all fields.', 'danger');
            return;
        }
        if (!validateEmail(email)) {
            showAlert('Please enter a valid email address.', 'danger');
            return;
        }
        // Simulate successful submission
        showAlert('Thank you for reaching out! I will get back to you soon.', 'success');
        form.reset();
    });

    function showAlert(message, type) {
        alertBox.textContent = message;
        alertBox.className = `alert alert-${type} mt-3`;
        alertBox.classList.remove('d-none');
        setTimeout(() => {
            alertBox.classList.add('d-none');
        }, 4000);
    }

    function validateEmail(email) {
        // Simple email regex
        return /^\S+@\S+\.\S+$/.test(email);
    }
});
