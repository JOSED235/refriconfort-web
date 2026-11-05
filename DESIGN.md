# Sistema visual: Refriconfort Cool

## Brief

- **Qué es:** el sitio de una empresa de aire acondicionado y refrigeración en Cali. Sus visitantes buscan "aire acondicionado Cali" en el celular, con calor, y quieren llamar o cotizar rápido.
- **Adjetivos:** técnico, cercano y fresco.
- **Marca existente (manda):** el logo, con un degradado de cian `#0B9BDF` a índigo `#3E4096` y letras de palo grueso condensadas.
- **Referencia propia:** la **etiqueta de servicio** amarilla que el técnico pega en el equipo con la fecha del próximo mantenimiento, y la **pantalla del control remoto** (temperatura en monoespaciada).
- **No debe parecer:** una plantilla genérica de servicios con íconos en círculos y fotos sin contexto.

## Tipografía

- **Archivo Variable** (eje de anchura 62–125 %). Los titulares van condensados (62–72 %, peso 780–820) y en mayúsculas, igual que el logo. El cuerpo va al 100 %.
- **IBM Plex Mono** para datos: códigos de servicio, fechas, temperatura y nombres de equipos.
- Escala fluida de 1.2 (360 px) a 1.333 (1440 px), con base de 17–18 px. Los valores están en `--paso-*`.

## Color

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--cian` | `#0B9BDF` | inicio del degradado, foco, detalles | solo texto grande o decorativo (3.1:1 con blanco) |
| `--azul` | `#2A66B4` | enlaces, borde activo | 5.3:1 sobre el fondo |
| `--indigo` | `#3E4096` | botón principal y títulos | 8.8:1 con blanco |
| `--noche` | `#161A3A` | franja superior y pie | 16.9:1 con blanco |
| `--cielo-claro` | `#7FD0F5` | enlaces y datos sobre fondo oscuro | 9.9:1 sobre la noche |
| `--etiqueta` | `#FADC7D` | etiqueta de servicio y botón "Pedir cotización" | 12.6:1 con la noche |
| `--tinta` | `#1C2340` | texto | 14.3:1 sobre el fondo |
| `--tinta-2` | `#4A5470` | texto secundario | 7.0:1 |

- El amarillo es el complemento del azul: llama a la acción sin salirse de la marca.
- El verde `#1F8F4E` está solo en el botón flotante de WhatsApp, para que se reconozca al instante.

## Animaciones

Todas se desactivan con `prefers-reduced-motion`.

| Animación | Qué hace | Por qué |
|---|---|---|
| Corrientes de aire | Líneas SVG que cruzan la portada (`stroke-dashoffset`) | El aire frío del equipo |
| Termostato | Baja de 32° a 22° al cargar | El calor de Cali contra el resultado del servicio |
| Etiqueta | Cae y "se pega" con rebote; se endereza al pasar el mouse | La etiqueta que pega el técnico |
| Portada | Acercamiento lento de la foto y entrada escalonada del texto | — |
| Ventilador | Gira en la sección de mantenimiento | — |
| Scroll | `[data-revelar]` con IntersectionObserver; variantes `izquierda` y `escala` y retardo por `--i` | Solo actúa si hay JS (clase `.js` en `<html>`), así el contenido nunca queda oculto |
| WhatsApp | Latido del botón flotante | — |

## Quiénes somos

- La misión va en una ficha amarilla, como la etiqueta de servicio. Es la segunda y última vez que se usa ese recurso, para que no pierda fuerza.
- Los cuatro valores van en fichas blancas numeradas (`01`–`04`, en monoespaciada) con borde superior cian, igual que los puntos de mantenimiento.

## Vista previa al compartir

- `public/og.jpg` (1200×630) repite la portada: la foto de condensadores con el degradado, el logo sobre fondo blanco, el titular condensado y una etiqueta amarilla con el WhatsApp.
- Es lo primero que ve el cliente cuando le llega el enlace por WhatsApp, así que debe verse como la página.

## Imágenes

- Las fotos vienen del sitio actual del cliente (`src/assets/img/`). Astro las optimiza a WebP con `srcset`.
- La mayoría son de stock o de fabricantes. Cuando haya fotos de trabajos reales, se reemplazan.
- Las fotos de producto usan `mix-blend-mode: multiply` para fundir el fondo blanco con la ficha.
