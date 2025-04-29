document.addEventListener("DOMContentLoaded", () => {
    const scrollToServicesButton = document.getElementById("scroll-to-services");
    const servicesSection = document.getElementById("services");

    scrollToServicesButton.addEventListener("click", () => {
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });
});
