# Portfolio · Nerea Hebles

Sitio estático (HTML + CSS + JS), listo para desplegar en Vercel. No necesita compilar nada.

## Qué hay en la carpeta
- `index.html`: toda la web (estructura, estilos, textos y lógica).
- `assets/`: capturas de los proyectos, foto, capturas de Figma y los dos CV (español e inglés).
- `og.jpg`: imagen que se ve al compartir el enlace en redes.
- `favicon.svg` y `apple-touch-icon.png`: iconos.
- `sitemap.xml`, `robots.txt`: para buscadores.
- `vercel.json`: caché para las imágenes y cabeceras de seguridad básicas.

## Antes de publicar
1. Busca `TU-DOMINIO` en `index.html`, `sitemap.xml` y `robots.txt` y cámbialo por tu dominio real (sin `https://`).
2. Si el dominio es un `.vercel.app`, vale el que te dé Vercel; uno propio posiciona mejor.

## Cómo publicarlo en Vercel
- Opción A (recomendada): sube esta carpeta a un repositorio de GitHub, entra en Vercel, pulsa "Add New → Project", importa el repositorio y despliega. Framework: "Other". Cada cambio que subas se publica solo.
- Opción B: con la terminal, dentro de la carpeta: `npx vercel --prod`.

## Cómo cambiar una captura
Sustituye el archivo en `assets/` manteniendo el nombre. Patrón: `proyecto-N-escritorio.webp` y `proyecto-N-movil.webp` (1 = portada, 2 = segunda pantalla). Proyectos: agrocor, fruit, inma, ideal, nacho, widad, tetuan, r3. Formato recomendado: WebP, 1600 px de ancho en escritorio y 480 px en móvil.

## Cómo cambiar un texto
Los textos de cada proyecto están en `index.html`, en el bloque `CASE` (español) y en el diccionario `EN` (inglés). Busca la frase y cámbiala en los dos sitios.

## Pendiente conocido
- El botón de idioma traduce en el navegador: Google indexa una sola versión (español). Para posicionar en inglés hace falta una URL propia por idioma (se resuelve al migrar a Next.js).
- Aún no hay analítica propia (GA4/Tag Manager) ni aviso de cookies. Si los añades, el aviso es obligatorio.
