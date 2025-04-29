document.addEventListener("DOMContentLoaded", () => {
    const transitionBtn = document.getElementById("transition-btn");
    const pageWrapper = document.querySelector(".page-wrapper");

    transitionBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default navigation
        pageWrapper.classList.add("slide-out");

        // Wait for the animation to complete before navigating
        setTimeout(() => {
            window.location.href = "hera.html";
        }, 500); // Match the animation duration
    });
});
