// Example JavaScript to add interactivity or form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Basic form validation (you can enhance this as needed)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // If validation passes, submit the form
        // This is where you would typically send the form data to your server
        form.submit();
    });
});
