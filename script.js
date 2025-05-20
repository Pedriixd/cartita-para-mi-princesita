
function mostrarFlores() {
  const contenedor = document.getElementById("flores");
  const emojis = ["🌸", "🌼", "🌻", "🌺", "🌷", "🌹", "🌻", "💐"];
  for (let i = 0; i < 100; i++) {
    const flor = document.createElement("div");
    flor.classList.add("flor");
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = Math.random() * 100 + "vh";
    flor.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    flor.style.position = "absolute";
    flor.style.fontSize = Math.random() * 30 + 20 + "px";
    contenedor.appendChild(flor);
    setTimeout(() => contenedor.removeChild(flor), 5000);
  }
}
