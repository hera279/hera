document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slides .slide");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    let currentIndex = 0;

    const updateCarousel = () => {
        const slidesContainer = document.querySelector(".carousel-slides");
        slidesContainer.style.transform = `translateY(-${currentIndex * 100}%)`; // Change to vertical scrolling

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    };

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});
