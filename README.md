# Refriconfort Cool: sitio web

Sitio nuevo para **Refriconfort Cool S.A.S.** (NIT 901.320.620-8), una empresa de aire acondicionado y refrigeración en Cali. Es la fase 1 de un proyecto personal con un cliente real. El plan completo, la investigación del cliente y la bitácora están en Google Drive: `G:\Mi unidad\02_Personal\Proyectos\refriconfort\docs\`.

Es estático, está hecho con Astro 7 y su prioridad es el SEO local.

## Qué resuelve frente al sitio anterior (WordPress, 2019)

| Problema del sitio actual | Solución |
|---|---|
| La sección de clientes muestra `[enjoyinstagram_mb]` sin procesar | Se quitó; vuelve cuando haya clientes reales con permiso |
| No se ven el teléfono, la dirección ni la ciudad | Franja superior fija con dirección, teléfono y WhatsApp, más un botón flotante de WhatsApp |
| No hay forma de cotizar ni de agendar | Formulario que arma el mensaje y lo abre en WhatsApp; etiqueta de "próximo mantenimiento" con un botón para agendar |
| Los servicios no tienen descripción | Cada servicio tiene foto, código y descripción |
| Poca visibilidad en Google | Título y descripción con "Cali", datos estructurados `HVACBusiness`, `sitemap.xml`, `robots.txt` e imágenes con texto alternativo |
| "Quiénes somos" escondido en `/technology/`, con la misión duplicada | Sección "Quiénes somos" en la misma página, con resumen, misión y los cuatro valores |
| El enlace compartido por WhatsApp no muestra vista previa | Imagen `public/og.jpg` de 1200×630 con metaetiquetas Open Graph y de Twitter |

## Stack

- Astro 7, sin framework de UI y con TypeScript estricto.
- `astro:assets` optimiza las imágenes a WebP con `srcset`.
- Fuentes autoalojadas con Fontsource: Archivo Variable (eje de anchura) e IBM Plex Mono.
- Pruebas con `node:test`, sin dependencias extra.
- El formulario no tiene backend: arma un enlace `wa.me` y no guarda datos.

## Estructura

```
src/
  data/empresa.ts      datos del negocio, servicios, equipos y preguntas (única fuente)
  lib/mensaje.ts       armado del enlace de WhatsApp y fecha del próximo mantenimiento
  lib/mensaje.test.ts  pruebas
  layouts/Base.astro   <head>, SEO y datos estructurados
  pages/index.astro    la página, su script y sus estilos
  styles/global.css    tokens: color, tipografía, espacio, forma; animación al hacer scroll
  assets/              logo y fotos (tomadas del sitio actual del cliente)
public/                favicon, robots.txt y sitemap.xml
imagenes/              material crudo del cliente (ignorado por git)
```

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # pruebas de src/lib
npm run build    # genera dist/
npm run preview  # sirve dist/
```

- Para cambiar el teléfono, la dirección o los servicios, edita solo `src/data/empresa.ts`.
- El sistema visual (paleta, contrastes, animaciones y reglas) está en [`DESIGN.md`](DESIGN.md).

## Nota

- Repositorio: https://github.com/JOSED235/refriconfort-web
- Vista previa en GitHub Pages: https://josed235.github.io/refriconfort-web/ (se despliega con cada push a `main`).

El código vive en `D:\devJose\refriconfort-web` y no en Google Drive, porque npm falla en Drive con `EBADF: bad file descriptor`.

Para compilar en Git Bash con la subruta de Pages hay que usar `MSYS_NO_PATHCONV=1`. Sin esa variable, Git Bash convierte `BASE=/refriconfort-web/` en una ruta de Windows y el build falla:

```bash
MSYS_NO_PATHCONV=1 SITE=https://josed235.github.io BASE=/refriconfort-web/ npm run build
```

`public/og.jpg` se generó con una captura de Chrome sin interfaz a partir de un HTML con la foto de portada, el logo y las fuentes del sitio. Si cambia el WhatsApp, hay que regenerarla, porque el número está escrito en la imagen.

## Pendiente

- Confirmar los datos de contacto con el cliente. Por ahora se toman de su sitio actual: teléfono 313 688 3532 (página de contacto), WhatsApp 317 848 1385 (widget de chat) y dirección Carrera 7C #84-18. Los directorios mencionan la #84-44.
- Pedir el horario, las redes sociales, los años de experiencia, las marcas con las que trabajan y los testimonios. No se publican hasta tenerlos confirmados.
- Preguntar si quieren conservar el Meta Pixel de Facebook que tiene su sitio actual.
- Conseguir fotos de trabajos reales (casi todas las actuales son de stock o de fabricantes) y el logo sin el NIT.
- Probar el envío del formulario a WhatsApp en un celular.
- Agregar una página de política de privacidad (Ley 1581 de 2012).
- Definir el hosting y el dominio: averiguar quién controla `refriconfortcool.com`.
