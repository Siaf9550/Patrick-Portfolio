const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});
const words = [
    "Web Developer",
    "Automotive Engineer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});
