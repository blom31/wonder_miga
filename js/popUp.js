const popup = document.getElementById("popup");
const close = document.getElementById("close");
const body = document.body;

// Mostrar el pop-up automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  popup.style.display = "flex"; // Usa la clase CSS robusta para bloquear el body
  body.classList.add("body-no-scroll");
});

// Cerrar con el botón
close.onclick = function () {
  popup.style.display = "none"; // Remueve la clase para restaurar el scroll
  body.classList.remove("body-no-scroll");
};

// Cerrar si se hace clic fuera del pop-up
popup.onclick = function (e) {
  if (e.target === popup) {
    popup.style.display = "none"; // ¡IMPORTANTE! También remueve la clase aquí
    body.classList.remove("body-no-scroll");
  }
};
