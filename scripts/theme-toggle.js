document.addEventListener("DOMContentLoaded", () => {
    const lightModeBtn = document.getElementById("light-mode-btn");
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const body = document.body;

    // Set default mode to dark
    body.classList.add("dark-mode");

    lightModeBtn.addEventListener("click", () => {
        body.classList.replace("dark-mode", "light-mode");
        lightModeBtn.style.display = "none";
        darkModeBtn.style.display = "inline";
    });

    darkModeBtn.addEventListener("click", () => {
        body.classList.replace("light-mode", "dark-mode");
        darkModeBtn.style.display = "none";
        lightModeBtn.style.display = "inline";
    });
});
