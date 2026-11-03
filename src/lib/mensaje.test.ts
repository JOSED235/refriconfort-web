import { test } from 'node:test';
import assert from 'node:assert/strict';
import { enlaceWhatsApp, proximoMantenimiento } from './mensaje.ts';

test('próximo mantenimiento suma días y cruza de mes y año', () => {
  const d = proximoMantenimiento(new Date(2026, 10, 15), 60);
  assert.deepEqual([d.getFullYear(), d.getMonth(), d.getDate()], [2027, 0, 14]);
});

test('el enlace de WhatsApp codifica el texto y omite campos vacíos', () => {
  const url = enlaceWhatsApp('573136883532', {
    nombre: ' Ana ', telefono: '', barrio: 'San Fernando', tipo: 'Hogar',
    servicio: 'Mantenimiento preventivo', equipo: '', detalle: 'Gotea & suena',
  });
  assert.ok(url.startsWith('https://wa.me/573136883532?text='));
  const texto = decodeURIComponent(url.split('text=')[1]);
  assert.equal(texto, 'Hola, quiero solicitar: Mantenimiento preventivo.\nNombre: Ana\nBarrio / ciudad: San Fernando\nEs para: Hogar\nDetalle: Gotea & suena');
});
