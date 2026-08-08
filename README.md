# Sitio web — Área Natural Protegida Eca do Queiros

Este sitio es HTML/CSS/JS plano: **no depende de ninguna plataforma externa**  para poder editarse. Cualquier persona puede abrir estos archivos con un editor de texto (o directamente en GitHub) y cambiarlos.

## Páginas del sitio
```
index.html            → Inicio (Conócenos)
servicios.html         → Lista de servicios (con links a cada uno)
ecobloque.html          → Detalle: Ecobloque
vivero.html             → Detalle: Vivero
cafeteria.html          → Detalle: Cafetería
salon.html              → Detalle: Salón de usos múltiples
lombricomposta.html     → Detalle: Lombricomposta
actividades.html        → Eventos/Actividades + embeds de Instagram
historia.html            → Historia, testimonios, quién mantiene el parque
galeria.html            → Galería de fotos
apoyar.html             → Cómo apoyar al parque (fotógrafos, donaciones, etc.)
css/style.css           → Todos los estilos (colores, tipografías, tarjetas, etc.)
js/main.js              → Menú móvil, tarjetas expandibles y el lightbox de fotos
img/                    → Fotos reales del parque
```

## Cómo publicarlo / dónde vive
El sitio se publica gratis con **GitHub Pages** directo desde este repositorio (rama `main`). No requiere ninguna cuenta externa ni se puede "bloquear" por inactividad, a diferencia de la versión anterior hecha en Lovable.

**Settings → Pages** dentro del repositorio muestra el link publicado y el estado de la última actualización.

## Cómo editar contenido (sin saber programar)

1. Abre el archivo `.html` de la sección que quieras cambiar (ej. `servicios.html`)
2. Busca el texto que quieres cambiar — está escrito tal cual, entre las etiquetas (ej. `<p>Este texto se ve en la página</p>`)
3. Cambia solo el texto entre las etiquetas, sin borrar los símbolos `< >`
4. Guarda el archivo y súbelo de nuevo a GitHub, o edítalo directo en la web de GitHub con el lápiz ✏️ que aparece al ver el archivo
5. **Commit changes**

## Pendientes marcados en el sitio

Busca estas señales dentro del código — indican qué falta por completar:
- Cajas punteadas verdes con **"📸 Foto pendiente"** → reemplazar por una foto real (ver siguiente sección)
- Etiquetas amarillas **"Falta info"** → reemplazar el texto de ejemplo por información real
- Comentarios en el código (`<!-- EDITAR: ... -->`) → instrucciones específicas de qué hacer ahí

## Cómo agregar una foto real

1. Sube la imagen a la carpeta `img/` (Add file → Upload files, o Create new file y pega el contenido si el arrastre no respeta la carpeta)
2. Busca el bloque `<div class="photo-placeholder">...</div>` que quieras reemplazar
3. Cámbialo por: `<img class="card-photo" src="img/nombre-del-archivo.jpg" alt="Descripción de la foto">`
4. Para fotos en las páginas de detalle de cada servicio, agrega también la clase `photo-detail` para que se vea más chica y centrada: `class="card-photo photo-detail"`
5. Al hacer clic en cualquier foto real ya subida, se abre en grande automáticamente (función de "lightbox" ya incluida en `js/main.js`)

## Conectar un post de Instagram (en Eventos/Actividades)

1. Abre el post en Instagram → ⋯ → Insertar/Embed
2. Copia el código que te da (empieza con `<blockquote class="instagram-media">`)
3. Pégalo dentro de uno de los recuadros de la sección "Desde Instagram" en `actividades.html`
4. Deja el `<script async src="https://www.instagram.com/embed.js"></script>` **una sola vez**, al final de esa sección — no lo dupliques

## Administración del repositorio

Este repositorio vive bajo una organización de GitHub (no una cuenta personal), para que no dependa de ninguna persona en particular y el parque tenga control total. Cualquier Owner de la organización puede agregar o quitar administradores desde **People** en la página de la organización.
Done
Cómo aplicarlo
