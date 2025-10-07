const popup = document.getElementById("popup");
const close = document.getElementById("close");

// Mostrar el pop-up automáticamente al cargar la página
window.onload = function () {
  popup.style.display = "flex";
};

// Cerrar con el botón
close.onclick = function () {
  popup.style.display = "none";
};

// Cerrar si se hace clic fuera de la imagen
popup.onclick = function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};
