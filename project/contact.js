document.getElementById('football-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const status = document.getElementById('form-status');
    const name = document.getElementById('name').value;

    // Simulate sending process
    status.classList.remove('hidden');
    status.innerText = "Sending your message...";

    setTimeout(() => {
        status.innerText = `Thanks for reaching out, ${name}! We'll get back to you soon.`;
        status.style.color = "#28a745"; // Success green
        
        // Reset the form
        document.getElementById('football-contact-form').reset();
    }, 1500);
});