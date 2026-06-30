const flowers = document.querySelector(".flowers");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// 🌸 Blumen erzeugen
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";

    const emojis = ["🌸", "🌺", "🌷", "💮", "🌼"];
    flower.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (5 + Math.random() * 6) + "s";
    flower.style.fontSize = (20 + Math.random() * 20) + "px";

    flowers.appendChild(flower);

    setTimeout(() => flower.remove(), 12000);
}

setInterval(createFlower, 400);

// ❤️ Herzanimation
function heartExplosion() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left =
            (window.innerWidth / 2 + (Math.random() * 250 - 125)) + "px";

        heart.style.top =
            (window.innerHeight / 2 + (Math.random() * 120 - 60)) + "px";

        heart.style.animationDuration =
            (2 + Math.random()) + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);

    }

}

// 😈 Nein-Button springt weg
function moveButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// 💖 Ja
yesBtn.addEventListener("click", () => {

    heartExplosion();

    setTimeout(() => {

        window.location.href = "date.html";

    }, 1200);

});