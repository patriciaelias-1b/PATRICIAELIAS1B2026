// =============================
// Animação ao aparecer na tela
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".fade").forEach(element => {
    observer.observe(element);
});


// =============================
// Navbar ao rolar
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(245,245,242,.96)";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.05)";

    } else {

        header.style.background = "rgba(245,245,242,.85)";
        header.style.boxShadow = "none";

    }

});


// =============================
// Scroll suave do menu
// =============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        alvo.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =============================
// Animação dos cards
// =============================

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = ".7s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 200 * index);

});


// =============================
// Ano automático no rodapé
// =============================

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML = `© ${new Date().getFullYear()} • Portfólio de Arte`;
}
