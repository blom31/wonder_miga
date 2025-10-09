// Mostrar el pop-up automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
});

const popup = document.getElementById("popup");
const close = document.getElementById("close");

// Cerrar con el botón
close.onclick = function () {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
};

// Cerrar si se hace clic fuera de la imagen
popup.onclick = function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};
