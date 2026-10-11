# pasteleria-01

Plantilla de **landing page multi-página** para una pastelería artesanal. Diseñada con un estilo cálido y elegante, ideal para negocios de repostería, tortas personalizadas, catering de eventos o emprendimientos similares.

## ✨ Características

- Diseño responsive (mobile, tablet y desktop).
- Estilos construidos con **Tailwind CSS** (vía CDN) y personalizaciones propias en `css/styles.css`.
- Tipografías de Google Fonts (Inter + Playfair Display).
- JavaScript vanilla, sin dependencias externas.
- Múltiples páginas listas para usar.
- Paleta de colores y tipografías fácilmente personalizables.

## 📂 Estructura del proyecto

```
pasteleria-01/
├── assets/          # Imágenes, logos y recursos estáticos
│   └── logo.svg
├── css/
│   └── styles.css   # Estilos personalizados (complementa a Tailwind)
├── js/
│   ├── main.js      # Comportamiento general del sitio
│   ├── nav.js       # Navegación / menú
│   ├── data.js      # Datos dinámicos (productos, galería, etc.)
│   ├── galeria.js   # Lógica de la galería
│   └── contacto.js  # Validación y manejo del formulario de contacto
├── index.html       # Página principal (inicio)
├── nosotros.html    # Sobre el negocio
├── servicios.html   # Servicios ofrecidos
├── galeria.html     # Galería de productos / trabajos
├── precios.html     # Lista de precios
├── clases.html      # Clases / talleres
├── contacto.html    # Formulario y datos de contacto
├── politicas.html   # Políticas de privacidad
└── terminos.html    # Términos y condiciones
```

## 🚀 Cómo usar esta plantilla

1. **Clonar o copiar** la carpeta del proyecto en tu equipo.
2. **Abrir `index.html`** en cualquier navegador moderno para visualizar la plantilla.
   - No requiere servidor, build ni instalación de dependencias.
3. **Personalizar el contenido** editando directamente los archivos HTML.

> 💡 Si querés servir el sitio localmente, podés usar cualquier servidor estático, por ejemplo:
> ```bash
> # Con Python 3
> python -m http.server 8080
>
> # Con Node.js (npx)
> npx serve .
> ```

## 🎨 Personalización

### Colores y tipografías
Están definidos en el bloque `tailwind.config` dentro de `<head>` en cada HTML. Podés modificar las paletas:

- `crema` `#FFFBF7`
- `rosa` (claro, medio, oscuro)
- `chocolate` (default, claro)
- `dorado` (default, claro)

Y las familias tipográficas:

- `display`: Playfair Display (títulos)
- `sans`: Inter (texto general)

### Contenido
- Editá los textos directamente en cada archivo `.html`.
- Reemplazá las imágenes dentro de `assets/` manteniendo los mismos nombres para no romper las referencias.
- Actualizá los datos dinámicos en `js/data.js` (productos, precios, etc.).

### Formulario de contacto
El formulario de `contacto.html` se maneja desde `js/contacto.js`. Por defecto no envía correos: conectalo al servicio que prefieras (Formspree, EmailJS, tu propio backend, etc.).

## 🧩 Recursos externos utilizados

- [Tailwind CSS](https://tailwindcss.com/) — vía CDN.
- [Google Fonts](https://fonts.google.com/) — Inter y Playfair Display.

## 📄 Páginas incluidas

| Página            | Descripción                                  |
|-------------------|----------------------------------------------|
| Inicio            | Presentación y destacados del negocio        |
| Nosotros          | Historia / equipo                            |
| Servicios         | Servicios ofrecidos                          |
| Galería           | Trabajos y productos                         |
| Precios           | Listado de precios                           |
| Clases            | Talleres / clases de pastelería              |
| Contacto          | Formulario e información de contacto         |
| Políticas         | Política de privacidad                       |
| Términos          | Términos y condiciones                       |

## 📝 Notas

- La plantilla usa **Tailwind por CDN**, pensado para prototipos y sitios simples. Para producción se recomienda compilar Tailwind localmente para reducir el peso final.
- Reemplazá los textos e imágenes de ejemplo antes de publicar.
- Revisá y adaptá las páginas de **Políticas** y **Términos** a la legislación vigente de tu país.

---

Hecho con 💕 como parte de **Templates Market**.