// You can add interactivity here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Alert when the form is submitted
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});
