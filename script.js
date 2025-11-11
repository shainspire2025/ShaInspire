document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                alert("✅ Message sent successfully! Thank you for reaching out.");
                contactForm.reset();
            } else {
                alert("⚠️ Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("⚠️ Network error. Please try again later.");
        }
    });
}

//Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".collage-gallery", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
          speed: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});
