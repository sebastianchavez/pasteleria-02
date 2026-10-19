// Navbar - Sticky y comportamiento en scroll
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  
  // Cambiar estilo del navbar al hacer scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
    
    // Mostrar/ocultar botón volver arriba
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Llamar al inicio
  
  // Marcar link activo según la página actual
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Menú móvil
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    mobileMenuBtn.setAttribute('aria-controls', 'mobileMenu');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    if (mobileCloseBtn) mobileCloseBtn.setAttribute('aria-label', 'Cerrar menú de navegación');
    mobileMenu.inert = true;

    const openMenu = () => {
      mobileMenu.inert = false;
      mobileMenu.classList.add('active');
      if (mobileOverlay) mobileOverlay.classList.add('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (mobileCloseBtn) mobileCloseBtn.focus();
    };
    
    const closeMenu = () => {
      mobileMenu.classList.remove('active');
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.inert = true;
      document.body.style.overflow = '';
      mobileMenuBtn.focus();
    };
    
    mobileMenuBtn.addEventListener('click', openMenu);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', event => {
      if (!mobileMenu.classList.contains('active')) return;
      if (event.key === 'Escape') closeMenu();
      if (event.key === 'Tab') {
        const controls = mobileMenu.querySelectorAll('a[href], button');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.matchMedia('(min-width: 1024px)').addEventListener('change', event => {
      if (event.matches && mobileMenu.classList.contains('active')) closeMenu();
    });
    
    // Cerrar al hacer click en un link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
  
  // Botón volver arriba
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Inicializar AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }
});
