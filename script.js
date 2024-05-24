let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



(function() {
    emailjs.init('B7Mvx-oh9M7vtPX9s'); // Replace with your EmailJS user ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Create the email parameters
    var templateParams = {
        to_name: 'Shenal',
        from_name: fullName,
        from_email: email,
        phone_number: phoneNumber,
        subject: subject,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_9q942op', 'template_sq5l7nc', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message Sent Successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});