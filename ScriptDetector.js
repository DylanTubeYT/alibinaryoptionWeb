// ScriptDetector.js

(function() {
  // Detecta si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // Obtiene la página actual
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();

    // Mapeo de páginas PC → móvil
    const redirections = {
      "index.html": "indexMovil.html",
      "curso.html": "cursomovil.html",
      "operativas.html": "operativasmovil.html",
      "estrategias.html": "estrategiasMovil.html"
    };

    // Redirige si existe la versión móvil
    if (redirections[currentPage]) {
      window.location.href = redirections[currentPage];
    }
  }
})();
