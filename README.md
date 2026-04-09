🎨 Generador de Paletas de Colores

Aplicación web que genera paletas de colores aleatorias de 6, 8 o 9 colores y permite visualizar cada color en distintos formatos como HEX y HSL.



🚀 Descripción del proyecto

Este proyecto permite al usuario generar paletas de colores dinámicas para diseño o desarrollo web.

El usuario puede:

	•	Elegir la cantidad de colores en la paleta (6, 8 o 9)
	•	Generar combinaciones aleatorias
	•	Cambiar el formato de visualización de los colores


⚙️ ¿Cómo funciona?

Generación de paletas

Al hacer clic en el botón “Generate Color”, el sistema:

	1.	Genera colores aleatorios mediante JavaScript
	2.	Crea dinámicamente elementos en el DOM
	3.	Muestra una paleta de:
	•	6 colores
	•	8 colores
	•	9 colores

Cada color se representa visualmente en pantalla dentro de un cuadro.


🔄 Cambio de formato de color

Después de generar la paleta, el usuario puede cambiar el formato de los colores usando el selector:

	•	HEX → Ejemplo: #FF5733
	•	HSL → Ejemplo: hsl(12, 100%, 60%)

El cambio se aplica a todos los colores generados sin necesidad de crear una nueva paleta.

🧠 Lógica del proyecto

La aplicación está basada en la generación de colores aleatorios y la manipulación del DOM.

🔹 Generación de colores

Se generan colores aleatorios utilizando JavaScript:

	•	Para HEX:
	•	Se construye un color con valores aleatorios del 0 al 255 convertidos a hexadecimal
	•	Para HSL:
	•	Se generan valores aleatorios de:
	•	Hue (0–360)
	•	Saturation (0–100%)
	•	Lightness (0–100%)


🔹 Creación de la paleta

	1.	El usuario selecciona la cantidad de colores (6, 8 o 9)
	
	2.	Se ejecuta una función que:
	
	•	Limpia la paleta anterior
	•	Genera nuevos colores
	•	Aplica el color como fondo


🔹 Cambio de formato

	•	Se utiliza un botón para alternar entre formatos:
	•	Si está en HEX → cambia a HSL
	•	Si está en HSL → cambia a HEX
	•	La conversión se realiza sin regenerar la paleta, manteniendo los mismos colores.




liga desplegada: edwinfranzoni.github.io/ProyectoM1_Edwin-Hernandez/





DOCUMENTACION DEL PROYECTO 1

funcionamiento de la pagina web

Thats the color!

Aplicación web que genera paletas de colores aleatorias de 6, 8 o 9 colores y permite visualizar cada color en distintos formatos como HEX y HSL.

da click en la cantidad donde marca el cuadro rojo

<img width="600" height="221" alt="Captura de pantalla 2026-04-08 a la(s) 19 37 13" src="https://github.com/user-attachments/assets/634fe3e7-e0ab-48fe-b13a-ef4dcce13b43" />



Al hacer clic en el botón “Generate Color”, el sistema:
	
	1.	Genera colores aleatorios 
	•	6 colores
	•	8 colores
	•	9 colores

Cada color se representa visualmente en pantalla dentro de un cuadro.

<img width="713" height="212" alt="Captura de pantalla 2026-04-08 a la(s) 19 40 43" src="https://github.com/user-attachments/assets/589a7a89-3ba4-41fb-86ca-d02a721d8df8" />


Cambio de formato de color

Después de generar la paleta, el usuario puede cambiar el formato de los colores usando el selector:

	•	HEX 
	•	HSL 

<img width="466" height="196" alt="Captura de pantalla 2026-04-08 a la(s) 19 33 58" src="https://github.com/user-attachments/assets/309f496f-febc-4e0c-8e6d-73e9501c5be5" />




DOCUMENTACION DEL USO DE LA IA

1 Primer prompt

<img width="488" height="213" alt="Captura de pantalla 2026-04-08 a la(s) 22 40 08" src="https://github.com/user-attachments/assets/4d3b3317-e067-4b34-838c-a8324df04fc9" />


<img width="857" height="280" alt="Captura de pantalla 2026-04-08 a la(s) 22 34 08" src="https://github.com/user-attachments/assets/6576ee0b-6678-4f3c-b9ff-cbacbd135e82" />

este resultado no me fuciono como requeria ya que aun no me guardaba los colores con el formato que solicitaba por lo que tuve que ser mas especifico.

2 segundo prompt

<img width="616" height="153" alt="Captura de pantalla 2026-04-08 a la(s) 22 32 07" src="https://github.com/user-attachments/assets/de6e65ab-cc4a-417a-b072-b81774094221" />


let coloresGenerados = [];


este codigo me permitio guardar los colores 


// 🔁 Evento del selector (solo cambia formato)
document.getElementById("formatselect").addEventListener("change", () => {
    mostrarColores();
});


y este me permite guardar los colores cambiando el formato sin generar otra paleta ya que fue el problema que tuve y me explicaron en sesion.

