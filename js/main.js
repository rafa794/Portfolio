// const img1 = document.querySelector(".img1");
// const descripcion1 = document.querySelector(".descripcion-proyecto1");

// img1.addEventListener("mouseover", toggleInactivo)
// img1.addEventListener("mouseout", toggleInactivo)

// function toggleInactivo(){
//    descripcion1.classList.toggle("inactivo")
// }

// const img2 = document.querySelector(".img2");
// const descripcion2 = document.querySelector(".descripcion-proyecto2");

// img2.addEventListener("mouseover", toggleInactivo2)
// img2.addEventListener("mouseout", toggleInactivo2)

// function toggleInactivo2(){
//    descripcion2.classList.toggle("inactivo")
// }
// const img3 = document.querySelector(".img3");
// const descripcion3 = document.querySelector(".descripcion-proyecto3");

// img3.addEventListener("mouseover", toggleInactivo3)
// img3.addEventListener("mouseout", toggleInactivo3)

// function toggleInactivo3(){
//    descripcion3.classList.toggle("inactivo")
// }


const imgs = document.querySelectorAll(".img");
const descripciones = document.querySelectorAll(".descripcion-proyecto");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("mouseover", toggleInactivo);
  imgs[i].addEventListener("mouseout", toggleInactivo);
}

function toggleInactivo(){
   this.nextElementSibling.classList.toggle("inactivo");
}
