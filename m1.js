const coloreshex = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF', '#974c4c', '#888888'];
const colorsHSL = ['hsl(0, 100%, 50%)', 'hsl(120, 100%, 50%)', 'hsl(240, 100%, 50%)', 'hsl(60, 100%, 50%)', 'hsl(300, 100%, 50%)', 'hsl(180, 100%, 50%)', 'hsl(0, 0%, 100%)', 'hsl(133, 56%, 35%)', 'hsl(0, 0%, 53%)'];

const contenedor = document.getElementById("contenedor");

function generarColores(cantidad) {
  contenedor.innerHTML = ""; 

  const formato = document.getElementById("formatSelect").value;

  for (let i = 0; i < cantidad; i++) {
    const cuadro = document.createElement("div");
    cuadro.classList.add("cuadro");

    let color;

    // color aleatorio
    if (formato === "HEX") {
        color = coloreshex[Math.floor(Math.random() * coloreshex.length)];
        } else {
        color = colorsHSL[Math.floor(Math.random() * colorsHSL.length)];
        }

    cuadro.style.backgroundColor = color;
    cuadro.textContent = color;

    contenedor.appendChild(cuadro);
  }
}
const select = document.getElementById("colorSelect");

document.querySelector("button").addEventListener("click", () => {
  generarColores(select.value);
});