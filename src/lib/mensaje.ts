export type Solicitud = {
  nombre: string;
  telefono: string;
  barrio: string;
  tipo: string;
  servicio: string;
  equipo: string;
  detalle: string;
};

/** Fecha del próximo mantenimiento, `dias` después de `desde`. */
export function proximoMantenimiento(desde: Date, dias: number): Date {
  const d = new Date(desde);
  d.setDate(d.getDate() + dias);
  return d;
}

/** Arma el enlace wa.me con la solicitud como texto; omite los campos vacíos. */
export function enlaceWhatsApp(numero: string, s: Solicitud): string {
  const lineas = [
    `Hola, quiero solicitar: ${s.servicio.trim() || 'una cotización'}.`,
    ['Nombre', s.nombre],
    ['Teléfono', s.telefono],
    ['Barrio / ciudad', s.barrio],
    ['Es para', s.tipo],
    ['Equipo', s.equipo],
    ['Detalle', s.detalle],
  ]
    .map((l) => (typeof l === 'string' ? l : l[1].trim() ? `${l[0]}: ${l[1].trim()}` : ''))
    .filter(Boolean);
  return `https://wa.me/${numero}?text=${encodeURIComponent(lineas.join('\n'))}`;
}
