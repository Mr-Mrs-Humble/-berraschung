const flowers = document.querySelector(".flowers");
const form = document.getElementById("dateForm");

// 🌸 Schwebende Blumen
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";

    const emojis = ["🌸", "🌺", "🌷", "💮", "🌼"];
    flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (5 + Math.random() * 5) + "s";
    flower.style.fontSize = (20 + Math.random() * 18) + "px";

    flowers.appendChild(flower);

    setTimeout(() => flower.remove(), 10000);
}

setInterval(createFlower, 450);

// Formular absenden
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const place = document.getElementById("place").value.trim();
    const message = document.getElementById("message").value.trim();

    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("place", place);
    localStorage.setItem("message", message);

    window.location.href = "success.html";
});