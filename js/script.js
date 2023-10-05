// Este script tiene la única funcionalidad de agregar cuadrados con texto a la página de forma dinámica

const items = document.querySelector(".flex-container");

for (let i = 1; i <= 2; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // Agregar texto al cuadrado
  const text = document.createTextNode("esto es el cuadrado " + i);
  square.appendChild(text);

  items.appendChild(square);
}
