document.addEventListener("DOMContentLoaded", () => {
    // Inicializa los carruseles
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carouselContainer) => {
        let currentSlide = 0;
        const slides = carouselContainer.querySelectorAll('.carousel-item');
        const carousel = carouselContainer.querySelector('.carousel');

        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Agrega los eventos a los botones
        carouselContainer.querySelector('.carousel-btn.left').addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        carouselContainer.querySelector('.carousel-btn.right').addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Inicializa el carrusel
        showSlide(currentSlide);
    });
});
