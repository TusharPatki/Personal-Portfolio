// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission for the contact section
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    
    // Here, you would normally handle the form submission, like sending an email or storing the data
    alert('Thank you for your message! I will get back to you soon.');

    // Reset the form after submission
    this.reset();
});
