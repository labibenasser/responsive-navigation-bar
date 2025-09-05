const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("menuNav");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if(navMenu.classList.contains("show")) {
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }
});

document.querySelectorAll("#menuNav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});