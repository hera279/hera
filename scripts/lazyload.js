document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img.fade-in");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Ensure images use data-src for lazy loading
                img.classList.add("visible"); // Add a class for fade-in effect
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    });

    images.forEach(img => {
        if (img.dataset.src) {
            observer.observe(img);
        }
    });
});
