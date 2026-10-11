// =============================================
// DATOS MOCK - Pastelería Dulce Tentación
// =============================================

const PASTELERIA_DATA = {
  // Información general - CHILE
  nombre: "Dulce Tentación",
  tagline: "Endulzamos tus momentos especiales",
  descripcion: "Pastelería artesanal hecha con amor, ingredientes de primera calidad y mucho cariño.",
  telefono: "+56 2 2897 5432",
  whatsapp: "+56912345678",
  email: "hola@dulcetentacion.cl",
  direccion: "Av. Providencia 1234, Providencia, Santiago, Chile",
  mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-70.6099!3d-33.4242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a!2sAv.+Providencia%2C+Santiago!5e0!3m2!1ses-419!2scl!4v1234567890",
  instagram: "https://instagram.com/dulcetentacion.cl",
  facebook: "https://facebook.com/dulcetentacion.cl",
  tiktok: "https://tiktok.com/@dulcetentacion.cl",

  // Horarios (formato 24h Chile)
  horarios: [
    { dia: "Lunes a Viernes", mañana: "9:00 - 14:00", tarde: "16:00 - 20:30" },
    { dia: "Sábados", mañana: "10:00 - 14:00", tarde: "16:00 - 21:00" },
    { dia: "Domingos", mañana: "10:00 - 14:00", tarde: "Cerrado" },
    { dia: "Feriados", mañana: "Cerrado", tarde: "Cerrado" }
  ],

  // Estadísticas (sobre nosotros)
  estadisticas: [
    { numero: "15+", texto: "Años endulzando" },
    { numero: "5.000+", texto: "Clientes felices" },
    { numero: "200+", texto: "Recetas únicas" },
    { numero: "50+", texto: "Premios ganados" }
  ],

  // Valores
  valores: [
    {
      titulo: "Ingredientes Premium",
      descripcion: "Solo usamos mantequilla francesa, chocolate belga y frutas frescas de temporada.",
      icono: "🌟"
    },
    {
      titulo: "Hecho a Mano",
      descripcion: "Cada torta, cupcake y postre es elaborado a mano por nuestros maestros pasteleros.",
      icono: "🤲"
    },
    {
      titulo: "Personalización Total",
      descripcion: "Adaptamos cada creación a tus gustos, alergias y ocasión especial.",
      icono: "🎨"
    },
    {
      titulo: "Tradición Familiar",
      descripcion: "Recetas transmitidas por tres generaciones de apasionados por la repostería.",
      icono: "👨‍👩‍👧"
    }
  ],

  // Servicios
  servicios: [
    {
      id: 1,
      titulo: "Tortas Personalizadas",
      descripcion: "Diseñamos la torta de tus sueños para cualquier ocasión: bodas, cumpleaños, bautismos.",
      imagen: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop",
      precioDesde: "$35.000",
      categoria: "tortas"
    },
    {
      id: 2,
      titulo: "Cupcakes & Mini Cakes",
      descripcion: "Pequeñas delicias individuales, perfectas para mesas dulces, regalos y eventos.",
      imagen: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=600&h=400&fit=crop",
      precioDesde: "$2.500",
      categoria: "cupcakes"
    },
    {
      id: 3,
      titulo: "Macarons Franceses",
      descripcion: "Macarons artesanales con rellenos creativos: pistacho, frambuesa, chocolate, vainilla.",
      imagen: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
      precioDesde: "$1.800",
      categoria: "macarons"
    },
    {
      id: 4,
      titulo: "Catering para Eventos",
      descripcion: "Mesas dulces completas, candy bars y servicio personalizado para tu celebración.",
      imagen: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=600&h=400&fit=crop",
      precioDesde: "$250.000",
      categoria: "eventos"
    },
    {
      id: 5,
      titulo: "Boxes Gourmet",
      descripcion: "Cajas regalo con selección de nuestros mejores productos para sorprender.",
      imagen: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&h=400&fit=crop",
      precioDesde: "$28.000",
      categoria: "regalos"
    },
    {
      id: 6,
      titulo: "Panadería Artesanal",
      descripcion: "Pan de masa madre, brioches, croissants y bollería recién horneada cada mañana.",
      imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
      precioDesde: "$1.200",
      categoria: "panaderia"
    }
  ],

  // Galería
  galeria: [
    { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop", categoria: "tortas", titulo: "Torta de Chocolate Belga" },
    { src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=600&fit=crop", categoria: "cupcakes", titulo: "Cupcakes de Vainilla" },
    { src: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&h=600&fit=crop", categoria: "macarons", titulo: "Macarons de Pistacho" },
    { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop", categoria: "tortas", titulo: "Torta de Bodas" },
    { src: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&h=600&fit=crop", categoria: "panaderia", titulo: "Croissants Artesanales" },
    { src: "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=600&h=600&fit=crop", categoria: "cupcakes", titulo: "Cupcakes de Frambuesa" },
    { src: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&h=600&fit=crop", categoria: "macarons", titulo: "Set de Macarons" },
    { src: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=600&h=600&fit=crop", categoria: "eventos", titulo: "Mesa Dulce Eventos" },
    { src: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&h=600&fit=crop", categoria: "regalos", titulo: "Box Gourmet Premium" },
    { src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop", categoria: "tortas", titulo: "Torta de Frutas" },
    { src: "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?w=600&h=600&fit=crop", categoria: "panaderia", titulo: "Pan de Masa Madre" },
    { src: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=600&h=600&fit=crop", categoria: "eventos", titulo: "Candy Bar" }
  ],

  // Clases / Cursos
  clases: [
    {
      id: 1,
      nombre: "Decoración de Tortas",
      nivel: "Intermedio",
      duracion: "4 horas",
      precio: "$85.000",
      descripcion: "Aprende técnicas profesionales de decoración con fondant, buttercream y glazing.",
      imagen: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop",
      proximasFechas: ["15 Nov 2026", "22 Nov 2026", "06 Dic 2026"],
      cupos: 8
    },
    {
      id: 2,
      nombre: "Repostería Básica",
      nivel: "Principiante",
      duracion: "3 horas",
      precio: "$65.000",
      descripcion: "Iníciate en el mundo de la repostería: bizcochos, cremas y primeras técnicas.",
      imagen: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop",
      proximasFechas: ["10 Nov 2026", "17 Nov 2026", "24 Nov 2026"],
      cupos: 10
    },
    {
      id: 3,
      nombre: "Macarons Perfectos",
      nivel: "Avanzado",
      duracion: "5 horas",
      precio: "$110.000",
      descripcion: "Domina la técnica francesa de los macarons: meringue, rellenos y acabados.",
      imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
      proximasFechas: ["20 Nov 2026", "04 Dic 2026", "11 Dic 2026"],
      cupos: 6
    },
    {
      id: 4,
      nombre: "Pan Artesanal",
      nivel: "Principiante",
      duracion: "4 horas",
      precio: "$75.000",
      descripcion: "Elabora tu propio pan de masa madre: aprende a amasar, fermentar y hornear.",
      imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
      proximasFechas: ["12 Nov 2026", "19 Nov 2026", "26 Nov 2026"],
      cupos: 8
    },
    {
      id: 5,
      nombre: "Chocolate y Bombones",
      nivel: "Intermedio",
      duracion: "4 horas",
      precio: "$95.000",
      descripcion: "Trabaja el chocolate como un profesional: temperado, bombones y figuras.",
      imagen: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=400&fit=crop",
      proximasFechas: ["18 Nov 2026", "25 Nov 2026", "02 Dic 2026"],
      cupos: 8
    },
    {
      id: 6,
      nombre: "Cupcakes Creativos",
      nivel: "Principiante",
      duracion: "3 horas",
      precio: "$60.000",
      descripcion: "Crea cupcakes decorados con técnicas modernas: piping, fondant y toppings.",
      imagen: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=600&h=400&fit=crop",
      proximasFechas: ["14 Nov 2026", "21 Nov 2026", "28 Nov 2026"],
      cupos: 12
    }
  ],

  // Precios / Planes
  precios: {
    tortas: [
      { tamaño: "Pequeña (10-15 personas)", precio: "$35.000 - $55.000" },
      { tamaño: "Mediana (20-30 personas)", precio: "$60.000 - $95.000" },
      { tamaño: "Grande (40-50 personas)", precio: "$110.000 - $160.000" },
      { tamaño: "XL (60+ personas)", precio: "$180.000 - $280.000" }
    ],
    planes: [
      {
        nombre: "Esencial",
        precio: "$120.000",
        descripcion: "Perfecto para reuniones íntimas",
        incluye: [
          "Torta mediana personalizada",
          "20 cupcakes a elección",
          "Decoración estándar",
          "Entrega local gratis"
        ],
        destacado: false
      },
      {
        nombre: "Premium",
        precio: "$280.000",
        descripcion: "El más elegido para eventos",
        incluye: [
          "Torta grande 3 pisos",
          "40 cupcakes variados",
          "Mesa dulce completa",
          "Globos y decoración temática",
          "Servicio de montaje",
          "Entrega local gratis"
        ],
        destacado: true
      },
      {
        nombre: "Lujo",
        precio: "$580.000",
        descripcion: "Para momentos inolvidables",
        incluye: [
          "Torta de boda premium",
          "80 cupcakes + macarons",
          "Candy bar completo",
          "Decoración floral",
          "Servicio completo 4h",
          "Asesoría personalizada",
          "Entrega local gratis"
        ],
        destacado: false
      }
    ]
  },

  // Testimonios
  testimonios: [
    {
      nombre: "María García",
      evento: "Boda",
      comentario: "Las tortas eran espectaculares, mejor de lo que imaginábamos. Todos nuestros invitados quedaron encantados.",
      avatar: "https://i.pravatar.cc/100?img=1",
      estrellas: 5
    },
    {
      nombre: "Carlos López",
      evento: "Cumpleaños infantil",
      comentario: "Los cupcakes estaban buenísimos y la decoración fue tal cual la pedimos. ¡Mis hijos alucinaron!",
      avatar: "https://i.pravatar.cc/100?img=12",
      estrellas: 5
    },
    {
      nombre: "Ana Martínez",
      evento: "Bautizo",
      comentario: "Profesionalidad y cariño en cada detalle. La torta fue la estrella de la fiesta.",
      avatar: "https://i.pravatar.cc/100?img=5",
      estrellas: 5
    },
    {
      nombre: "Pedro Sánchez",
      evento: "Aniversario",
      comentario: "La mesa dulce fue preciosa y deliciosa. Repetiremos sin duda para cualquier celebración.",
      avatar: "https://i.pravatar.cc/100?img=15",
      estrellas: 5
    }
  ],

  // Equipo
  equipo: [
    {
      nombre: "Laura Fernández",
      rol: "Maestra Pastelera & Fundadora",
      imagen: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
      bio: "20 años de experiencia formándose en París y Londres"
    },
    {
      nombre: "Miguel Torres",
      rol: "Chef de Panadería",
      imagen: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
      bio: "Especialista en masas madre y bollería artesanal"
    },
    {
      nombre: "Sofía Ruiz",
      rol: "Diseñadora & Decoradora",
      imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Artista del fondant y las decoraciones de azúcar"
    }
  ]
};

// Datos para el formulario de contacto
const TIPOS_CONSULTA = [
  "Información general",
  "Pedido personalizado",
  "Catering para eventos",
  "Clases y cursos",
  "Reservar mesa",
  "Colaboraciones",
  "Otro"
];