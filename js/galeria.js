// Galería - Filtros y Lightbox
document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery-container');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  
  if (!galleryContainer || typeof PASTELERIA_DATA === 'undefined') return;
  
  let currentFilter = 'todos';
  
  // Renderizar galería
  function renderGallery(filter = 'todos') {
    const items = filter === 'todos' 
      ? PASTELERIA_DATA.galeria 
      : PASTELERIA_DATA.galeria.filter(item => item.categoria === filter);
    
    galleryContainer.innerHTML = items.map((item, idx) => `
      <div class="gallery-item overflow-hidden rounded-2xl shadow-md" 
           data-aos="zoom-in" 
           data-aos-delay="${idx * 50}"
           data-src="${item.src}" 
           data-title="${item.titulo}">
        <img src="${item.src}" alt="${item.titulo}" loading="lazy" class="w-full h-64 object-cover">
      </div>
    `).join('');
    
    // Re-asignar eventos de click para el lightbox
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        if (!lightbox) return;
        lightboxImg.src = item.dataset.src;
        lightboxCaption.textContent = item.dataset.title;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }
  
  // Filtros
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGallery(currentFilter);
      
      // Re-inicializar AOS para los nuevos elementos
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    });
  });
  
  // Cerrar lightbox
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  // Render inicial
  renderGallery();
});