const coloreshex = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF', '#000000', '#888888'];
const colorsHSL = ['hsl(0, 100%, 50%)', 'hsl(120, 100%, 50%)', 'hsl(240, 100%, 50%)', 'hsl(60, 100%, 50%)', 'hsl(300, 100%, 50%)', 'hsl(180, 100%, 50%)', 'hsl(0, 0%, 100%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 53%)'];

const contenedor = document.getElementById("contenedor");

function generarColores(cantidad) {
  contenedor.innerHTML = ""; // limpia antes

  for (let i = 0; i < cantidad; i++) {
    const cuadro = document.createElement("div");
    cuadro.classList.add("cuadro");

    // color aleatorio
    const color = "#" + Math.floor(Math.random()*16777215).toString(16);

    cuadro.style.backgroundColor = color;

    contenedor.appendChild(cuadro);
  }
}
const select = document.getElementById("colorSelect");

document.querySelector("button").addEventListener("click", () => {
  generarColores(select.value);
});