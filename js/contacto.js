// Formulario de contacto - Validación y simulación de envío
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');
  
  if (!form) return;
  
  // Cargar opciones del select
  const selectTipo = document.getElementById('tipoConsulta');
  if (selectTipo && typeof TIPOS_CONSULTA !== 'undefined') {
    TIPOS_CONSULTA.forEach(tipo => {
      const option = document.createElement('option');
      option.value = tipo;
      option.textContent = tipo;
      selectTipo.appendChild(option);
    });
  }
  
  // Validación
  function validateField(field) {
    const errorEl = document.getElementById(field.id + 'Error');
    let isValid = true;
    let message = '';
    
    if (field.required && !field.value.trim()) {
      isValid = false;
      message = 'Este campo es obligatorio';
    } else if (field.type === 'email' && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        isValid = false;
        message = 'Introduce un email válido';
      }
    } else if (field.type === 'tel' && field.value) {
      const phoneRegex = /^[\d\s+()-]{7,}$/;
      if (!phoneRegex.test(field.value)) {
        isValid = false;
        message = 'Introduce un teléfono válido';
      }
    }
    
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.toggle('show', !isValid);
    }
    field.classList.toggle('error', !isValid);
    
    return isValid;
  }
  
  // Validar en tiempo real
  ['nombre', 'email', 'telefono', 'mensaje'].forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) {
          validateField(field);
        }
      });
    }
  });
  
  // Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fields = [form.nombre, form.email, form.telefono, form.mensaje];
    let allValid = true;
    
    fields.forEach(field => {
      if (field && !validateField(field)) {
        allValid = false;
      }
    });
    
    if (!allValid) return;
    
    // Simular envío
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    setTimeout(() => {
      form.classList.add('hidden');
      if (successMessage) successMessage.classList.remove('hidden');
      
      // Resetear después de 5 segundos
      setTimeout(() => {
        form.reset();
        form.classList.remove('hidden');
        if (successMessage) successMessage.classList.add('hidden');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 5000);
    }, 1200);
  });
});