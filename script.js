// Append directly inside your DOMContentLoaded block in script.js
const sideMenu = document.getElementById("side-menu");
const openMenuBtn = document.getElementById("menu-open-btn");
const closeMenuBtn = document.getElementById("menu-close-btn");

if (sideMenu && openMenuBtn && closeMenuBtn) {
    // Open Drawer Event
    openMenuBtn.addEventListener("click", () => {
        sideMenu.classList.remove("translate-x-full");
    });

    // Close Drawer Event
    closeMenuBtn.addEventListener("click", () => {
        sideMenu.classList.add("translate-x-full");
    });
    
    // Close Drawer automatically when clicking anywhere else on screen
    document.addEventListener("click", (e) => {
        if (!sideMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
            sideMenu.classList.add("translate-x-full");
        }
    });
}