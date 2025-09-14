// --- Flip cards de servicios ---
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#services .services-card-arrow').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const card = btn.closest('.services-card');
      card.classList.add('flipped');
    });
  });
  document.querySelectorAll('#services .services-card-back-close').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const card = btn.closest('.services-card');
      card.classList.remove('flipped');
    });
  });
});
// Scrollspy activation for Bootstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar',
  offset: 70
});