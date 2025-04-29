document.addEventListener("DOMContentLoaded", () => {
    const cursorCircle = document.createElement("div");
    cursorCircle.classList.add("cursor-circle");
    document.body.appendChild(cursorCircle);

    document.addEventListener("mousemove", (e) => {
        cursorCircle.style.left = `${e.clientX}px`;
        cursorCircle.style.top = `${e.clientY}px`;
    });
});
