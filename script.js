const carta = document.getElementById("carta");
carta.addEventListener("click", () => {
    carta.classList.toggle("open");
});

// Generar corazones flotando
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.width = heart.style.height = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Crear corazones cada 300ms
setInterval(createHeart, 300);