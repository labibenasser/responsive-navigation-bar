const menuBtn = document.getElementById("menuBtn");
const menuNav = document.getElementById("menuNav");

menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("show");
    menuBtn.classList.toggle("show")
});

document.querySelectorAll("#menuNav a").forEach(link => {
    link.addEventListener("click", () => {
        menuNav.classList.remove("show");
        menuBtn.classList.remove("show");
    });
});