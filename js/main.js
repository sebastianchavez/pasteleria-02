// Funciones utilitarias y de inicialización general

document.addEventListener('DOMContentLoaded', () => {
  // Generar HTML de testimonios dinámicamente
  const testimoniosContainer = document.getElementById('testimonios-container');
  if (testimoniosContainer && typeof PASTELERIA_DATA !== 'undefined') {
    testimoniosContainer.innerHTML = PASTELERIA_DATA.testimonios.map(t => `
      <div class="bg-white p-6 rounded-2xl shadow-md card-hover" data-aos="fade-up">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">
          ${'★'.repeat(t.estrellas).split('').map(() => '<span>★</span>').join('')}
        </div>
        <p class="text-chocolate/80 italic mb-4">"${t.comentario}"</p>
        <div class="flex items-center gap-3">
          <img src="${t.avatar}" alt="${t.nombre}" class="w-12 h-12 rounded-full object-cover">
          <div>
            <p class="font-semibold">${t.nombre}</p>
            <p class="text-sm text-chocolate/60">${t.evento}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
});