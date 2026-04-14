// Smooth scrolling (safe version)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Navbar scroll effect (optimized)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});


// ================= CONTACT FORM =================

const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function(e) {

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (name === "" || email === "" || message === "") {
            e.preventDefault();
            alert("Please fill all fields!");
            return;
        }

        setTimeout(() => {
            alert("Message sent successfully! 🚀");
        }, 100);

    });
}