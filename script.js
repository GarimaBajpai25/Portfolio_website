
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================================
// TYPING EFFECT
// ================================

const typingElement = document.getElementById("typing");

const roles = [
    "Data Science Student",
    "Python Developer",
    "Web Developer",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// ACTIVE NAV LINK
// ================================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


// ================================
// SCROLL TO TOP
// ================================

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Please fill all the fields.");

        return;
    }


    alert(
        `Thank you ${name}! Your message has been received.`
    );

    contactForm.reset();

});


// ================================
// CURRENT YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();
