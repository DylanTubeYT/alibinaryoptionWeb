// 🌀 Script pantalla de carga reutilizable
// Usa la función iniciarPantallaCarga("nombreDelVideo.mp4")

function iniciarPantallaCarga(nombreVideo) {
  // Crear contenedor principal
  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.style.cssText = `
    position:fixed;
    top:0; left:0;
    width:100%; height:100%;
    background:#000;
    z-index:9999;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    transition:opacity 1s ease-out;
  `;

  // Crear el video
  const video = document.createElement('video');
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.style.cssText = `
    width:100%;
    height:100%;
    object-fit:cover;
  `;
  video.src = nombreVideo;

  // Agregar video al contenedor
  loader.appendChild(video);
  document.body.appendChild(loader);

  // Detectar si todos los recursos de la página ya cargaron
  window.addEventListener('load', () => {
    // Desvanecer el loader
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 1000);
  });

  // Si el video termina pero la página no ha cargado → repetir
  video.addEventListener('ended', () => {
    if (document.readyState !== 'complete') {
      video.play();
    }
  });
}
