// When user inputs their contact information on Contact Form Page, alert 'thank you for your message - we will get back to you shortly' 
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const textArea = document.getElementById('message').value
    if (textArea) {
        alert("Thank you for your message! We will get back to you shortly.");
    }
}); 