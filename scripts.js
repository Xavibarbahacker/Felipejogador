// Carrossel de imagens
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        slide.classList.toggle('active-slide', i === index);
    });
}

// Inicializa o carrossel com o primeiro slide
showSlide(currentSlide);

// Próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Controles de navegação do carrossel
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');

if (nextButton && prevButton) {
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
}

// Mudar slide automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);

// Botão "Voltar ao Topo"
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

