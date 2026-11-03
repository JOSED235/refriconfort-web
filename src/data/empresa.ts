// Única fuente de los datos del negocio. ⚠️ Teléfono y dirección pendientes de confirmar
// con el cliente (en internet aparecen 313 688 3532 / 317 848 1385 y #84-18 / #84-44).
export const empresa = {
  nombre: 'Refriconfort Cool',
  razonSocial: 'Refriconfort Cool S.A.S.',
  nit: '901.320.620-8',
  sitio: 'https://refriconfortcool.com',
  telefono: '313 688 3532',
  telefonoE164: '+573136883532',
  whatsapp: '573136883532',
  correo: 'refriconfortcool@hotmail.com',
  direccion: 'Carrera 7C #84-18',
  ciudad: 'Cali',
  departamento: 'Valle del Cauca',
  mantenimientoDias: 60,
} as const;

// `img`: nombre del archivo en src/assets/img/ (fotos tomadas del sitio actual del cliente).
export const servicios = [
  { codigo: 'SRV-01', img: 'srv-mantenimiento.jpg', nombre: 'Mantenimiento preventivo', detalle: 'Limpieza de filtros, serpentines y drenaje; revisión de gas, presión y conexiones eléctricas. Recomendado cada dos meses.' },
  { codigo: 'SRV-02', img: 'srv-reparacion.jpg', nombre: 'Reparación', detalle: 'Diagnóstico y arreglo de equipos que no enfrían, gotean, se congelan o hacen ruido.' },
  { codigo: 'SRV-03', img: 'srv-montaje.jpg', nombre: 'Montaje e instalación', detalle: 'Instalación de equipos nuevos en casas, oficinas y locales, con tubería, soportes y conexión eléctrica.' },
  { codigo: 'SRV-04', img: 'srv-diseno.jpg', nombre: 'Diseño', detalle: 'Cálculo de capacidad (BTU) y distribución de equipos según el espacio y su uso.' },
  { codigo: 'SRV-05', img: 'srv-ducteria.jpg', nombre: 'Ductería y filtros', detalle: 'Fabricación e instalación de ductos, extractores y filtros para sistemas centrales y de paquete.' },
  { codigo: 'SRV-06', img: 'srv-venta.jpg', nombre: 'Venta de equipos', detalle: 'Suministro de equipos de aire acondicionado y refrigeración.' },
] as const;

export const equipos = [
  { nombre: 'Mini split', img: 'eq-mini-split.jpg' },
  { nombre: 'Tipo espejo', img: 'eq-tipo-espejo.jpg' },
  { nombre: 'Cassette', img: 'eq-cassette.jpg' },
  { nombre: 'Piso-techo', img: 'eq-piso-techo.jpg' },
  { nombre: 'Fan coil', img: 'eq-fan-coil.jpg' },
  { nombre: 'Paquete', img: 'eq-paquete.jpg' },
  { nombre: 'Central', img: 'eq-central.jpg' },
  { nombre: 'Chiller', img: 'eq-chiller.jpg' },
] as const;

// Contenido de la sección de preguntas frecuentes de su página actual.
export const preguntas = [
  { p: '¿Cada cuánto se le hace mantenimiento a un aire acondicionado?', r: 'El mantenimiento preventivo debe hacerse cada dos meses. Así el equipo enfría bien, gasta menos energía y el aire sale limpio.' },
  { p: '¿Cuánto dura un aire acondicionado?', r: 'Entre 12 y 15 años. Un equipo de 10 años o más puede ser hasta un 60 % menos eficiente que uno nuevo, por eso a veces cambiarlo antes ahorra en energía y reparaciones.' },
  { p: '¿Por qué se congela mi aire acondicionado?', r: 'El congelamiento es una falla común y puede pasar en la unidad interior o en la exterior. Suele deberse a filtros sucios, poco gas o mala circulación de aire. Apaga el equipo y pide una revisión.' },
  { p: '¿Qué beneficios tiene un aire acondicionado en casa u oficina?', r: 'Además de enfriar, los filtros retienen polvo fino y alérgenos. Para que sigan funcionando hay que limpiarlos en cada mantenimiento.' },
  { p: '¿Qué significa BTU?', r: 'Es la cantidad de calor necesaria para subir un grado Fahrenheit una libra de agua. En un aire acondicionado indica cuánto calor puede sacar del espacio: a más metros cuadrados, más BTU.' },
  { p: '¿Hay que cerrar puertas y ventanas con el aire encendido?', r: 'Sí. Si entra calor de afuera, el equipo trabaja de más, gasta más energía y se desgasta antes.' },
] as const;
