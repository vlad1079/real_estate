// menu burger
const iconMenu = document.querySelector(".menu_icon");
if (iconMenu) {
    const menuBody = document.querySelector(".header_nav");
    iconMenu.addEventListener("click", () => {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}