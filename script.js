document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CUSTOM BRUTALIST CURSOR TRAILING EFFECT
    const cursor = document.getElementById("custom-cursor");
    
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Change text context when hovering over interactive elements
        document.querySelectorAll('.brutal-shadow-btn, a').forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.textContent = "EXECUTE";
                cursor.style.background = "#FF5757";
                cursor.style.color = "#FFFFFF";
            });
            item.addEventListener('mouseleave', () => {
                cursor.textContent = "SELECT *";
                cursor.style.background = "#FFE600";
                cursor.style.color = "#000000";
            });
        });
    }

    // 2. MATRIX / GLITCH TEXT MATRIX ANIMATION ON HOVER
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//";
    const glitchElement = document.querySelector(".data-glitch");

    if (glitchElement) {
        glitchElement.addEventListener("mouseover", (event) => {
            let iteration = 0;
            clearInterval(event.target.interval);

            event.target.interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 36)];
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(event.target.interval);
                }
                iteration += 1 / 3;
            }, 30);
        });
    }

    // 3. DYNAMIC SKILL ADDER
    const loaderBtn = document.getElementById("dynamic-loader");
    if (loaderBtn) {
        loaderBtn.addEventListener("click", () => {
            const parentList = loaderBtn.parentElement;
            
            const newTech = document.createElement("li");
            newTech.className = "flex items-center gap-2 bg-[#FFE600] p-2 border-2 border-black transition-all transform scale-105 font-bold animate-pulse";
            newTech.innerHTML = `<i class="fa-solid fa-brain"></i> Neural Networks (AI Core)`;
            
            parentList.insertBefore(newTech, loaderBtn);
            loaderBtn.remove();
        });
    }
});