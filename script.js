
function mostrarFlores() {
  const contenedor = document.getElementById("flores");
  for (let i = 0; i < 40; i++) {
    const flor = document.createElement("div");
    flor.classList.add("flor");
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = "100vh";
    flor.innerHTML = "🌸";
    contenedor.appendChild(flor);
    setTimeout(() => contenedor.removeChild(flor), 5000);
  }
}
