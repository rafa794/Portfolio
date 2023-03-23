const imgs = document.querySelectorAll(".img");
const descripciones = document.querySelectorAll(".descripcion-proyecto");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("mouseover", toggleInactivo);
  imgs[i].addEventListener("mouseout", toggleInactivo);
}

function toggleInactivo() {
  this.nextElementSibling.classList.toggle("inactivo");
}
