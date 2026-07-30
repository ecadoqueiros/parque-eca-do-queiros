document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  document.querySelectorAll('.card-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.card');
      if (card) card.classList.toggle('open');
    });
  });

  // Lightbox: clic en una foto real para verla en grande
  function openLightbox(src, alt) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Cerrar">&times;</button>' +
      '<img src="' + src + '" alt="' + (alt || '') + '">';
    overlay.addEventListener('click', function () {
      overlay.remove();
    });
    document.body.appendChild(overlay);
  }

  document.querySelectorAll('.card-photo, .gallery-grid img').forEach(function (img) {
    img.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openLightbox(img.src, img.alt);
    });
  });
});
