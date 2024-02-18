// Función para mostrar un mensaje de confirmación si el usuario hace clic en el enlace del video
function confirmarBeso() {
    if (confirm("¿Quieres besarte conmigo?")) {
      alert("¡Me encantaría! ");
    } else {
      alert("Lo siento, pero lo entiendo. ");
    }
  }
  
  // Agregar el evento "click" al enlace del video
  const enlaceVideo = document.querySelector("a");
  enlaceVideo.addEventListener("click", confirmarBeso);