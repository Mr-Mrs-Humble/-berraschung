const flowers = document.querySelector(".flowers");
const result = document.getElementById("result");
const encrypted = document.getElementById("encrypted");

// 🌸 Blumen
function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    const list = ["🌸", "🌺", "🌷", "💮", "🌼", "💖"];

    flower.innerHTML = list[Math.floor(Math.random() * list.length)];

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.animationDuration = (5 + Math.random() * 5) + "s";

    flower.style.fontSize = (20 + Math.random() * 18) + "px";

    flowers.appendChild(flower);

    setTimeout(() => flower.remove(), 10000);

}

setInterval(createFlower, 400);

// Daten laden

const date = localStorage.getItem("date");
const time = localStorage.getItem("time");
const place = localStorage.getItem("place");
const message = localStorage.getItem("message");

// Datum schöner anzeigen

let germanDate = date;

if (date) {

    const d = new Date(date);

    germanDate = d.toLocaleDateString("de-DE");

}

// Nachricht

const text =
    `Ich freue mich schon auf den ${germanDate} um ${time} mit dir beim ${place}.
${message}

Ich liebe dich. ❤️`;

result.innerHTML = `
<p style="font-size:22px">
${text.replace(/\n/g, "<br>")}
</p>
`;

// XOR

function xorEncrypt(text, key) {
    const encoder = new TextEncoder();
    const textBytes = encoder.encode(text);
    const keyBytes = encoder.encode(key);

    const result = new Uint8Array(textBytes.length);

    for (let i = 0; i < textBytes.length; i++) {
        result[i] = textBytes[i] ^ keyBytes[i % keyBytes.length];
    }

    let binary = "";
    result.forEach(byte => binary += String.fromCharCode(byte));

    return btoa(binary);
}

encrypted.value = xorEncrypt(text, "My Short Queen");

// Kopieren

document.getElementById("copyBtn").onclick = () => {

    navigator.clipboard.writeText(encrypted.value);

    alert("❤️ Verschlüsselte Nachricht kopiert!");

};