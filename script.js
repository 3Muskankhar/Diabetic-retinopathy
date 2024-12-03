// Example: A simple JS function to scroll to a section when the button is clicked
document.querySelector('.cta-button').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
    });
});
