// script.js

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-now');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your purchase!');
            // Additional functionality can be added here, like redirecting to a payment page
        });
    });
});
