
function mostrarFlores() {
  const contenedor = document.getElementById("flores");
  const emojis = ["🌸", "🌼", "🌻", "🌺", "🌷", "🌹", "💐", "🌼", "🌺"];
  for (let i = 0; i < 300; i++) {
    const flor = document.createElement("div");
    flor.classList.add("flor");
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = Math.random() * 100 + "vh";
    flor.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    flor.style.position = "absolute";
    flor.style.fontSize = Math.random() * 30 + 20 + "px";
    flor.style.animation = "flotar 5s linear infinite";
    contenedor.appendChild(flor);
    setTimeout(() => contenedor.removeChild(flor), 6000);
  }
}
