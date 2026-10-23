# Registro de cambios

## [2.0.2] · Correcciones de QA · 23 de octubre de 2026

Correcciones del reporte de QA de front-end y diseño responsivo, probado en Chrome y Firefox en 13 tamaños de pantalla, de 320 a 1920 px, incluidos celulares en horizontal.

### Corregido

- **A1 · Tabla del aviso de privacidad cortada en celulares de 390 px o menos.** En pantallas de hasta 600 px ahora se muestra como tarjetas apiladas, con la etiqueta de cada dato.
- **A2 · URLs canónicas.** `zarvela.org` redirige a `www.zarvela.org`, así que la canónica, `og:url`, los datos estructurados, `sitemap.xml` y `robots.txt` ahora usan `https://www.zarvela.org`.
- **A3 · Imagen para compartir.** Nueva `img/branding/zarvela-og.jpg` de 1200×630 y 60 KB (antes, PNG de 1536×1024 y 1.7 MB, que WhatsApp podía no mostrar). Se agregaron `og:image:width` y `og:image:height`.
- **M1 · Textos pequeños en celular.** Más grandes: pie de página (0.9rem), etiquetas legales, nota de privacidad, dirección del pie, franja de datos, ruta de navegación, botones y etiquetas de sección.
- **M2 · Contraste de las etiquetas legales:** de 4.06:1 a 6.38:1 (mínimo recomendado: 4.5:1).
- **M3 · Áreas táctiles.** Los enlaces del pie, la ruta de navegación y el logo ahora miden al menos 44 px de alto.
- **M4 · Rendimiento.**
  - Las fuentes Cormorant Garamond y Manrope ahora están en el propio sitio (`/fonts`, woff2), con precarga, en lugar de cargarse desde Google Fonts.
  - La foto se sirve en WebP con 3 tamaños (480, 800 y 1200 px), mediante `<picture>` y `srcset`. En celular baja de 266 KB a 41 KB.
- **M5 · Nombre accesible del logo:** se quitó el `aria-label`, que no coincidía con el texto visible.
- **B1 · Mensajes de WhatsApp:** respetan siglas y nombres propios (VPPB, EVC, Parkinson).
- **B2 · Ortografía:** "desgarres" se cambió por "desgarros" (RAE).
- **B3 · Enlaces de WhatsApp:** `rel="noopener noreferrer"`.
- **B4 · Títulos SEO de menos de 60 caracteres** en musculoesquelética, vestibular y geriátrica. Descripción de geriátrica de menos de 160.
- **B5 · Círculo decorativo del inicio:** ya no se recorta en anchos de 860 a 1100 px.
- **B6 · Dirección unificada** como "interior 501" en todo el sitio.
- **B7 · Equilibrio Dinámico:** se quitó el enlace, porque el perfil de Marisol ya no existe en ese sitio. Se conserva el nombre.
- **Banda "Primera cita":** los círculos decorativos ahora son degradados dentro de la sección, así que nada sobresale de su contenedor.
- **Aviso de privacidad:** ya no menciona Google Fonts, porque las fuentes son propias.

## [2.0.1] · Correcciones móviles · 23 de octubre de 2026

### Corregido

- **Número de WhatsApp**: todos los botones, el número visible en Contacto y el teléfono de los datos estructurados ahora usan **+52 56 2174 9767** (`wa.me/525621749767`), el mismo registrado ante COFEPRIS. Antes: 55 3879 9478.
- **Íconos invisibles** (redes sociales y WhatsApp). El archivo `img/icons.svg` nunca llegó al repositorio, así que en producción los círculos salían vacíos y los botones mostraban un hueco que descentraba el texto. Ahora cada ícono va escrito dentro del HTML, sin depender de ningún archivo externo.
- **Scroll horizontal en celulares.** El círculo decorativo del inicio sobresalía unos 11 px de la pantalla. Se ajustó su posición y se agregó `overflow-x: clip` a `html` y `body` como protección.
- **Menú móvil transparente.** El efecto de desenfoque de la barra (`backdrop-filter`) dejaba el menú atrapado dentro de ella. Ahora, con el menú abierto, la barra usa un fondo sólido.
- **Botón "Agendar valoración" del menú móvil**: ahora ocupa todo el ancho y el texto queda centrado.

### Mejorado

- **Sección legal del pie de página**: cada dato va en su propio renglón con etiqueta (responsable sanitario, formación, cédula, COFEPRIS). Se ve en 4 columnas en escritorio, 2 en tableta y 1 en celular.
- **Mapa**: ahora busca la dirección "Av. Insurgentes Sur 540, Roma Sur" en lugar de unas coordenadas fijas, y se agregó el enlace "Cómo llegar" a Google Maps. Google Maps no puede ubicar el interior 501, solo el edificio.

## [2.0.0] · Rebranding · 22 de octubre de 2026

Rediseño completo del sitio para posicionar a Zarvela como un consultorio de fisioterapia premium en Roma Sur, con contenido corregido y la información legal y sanitaria obligatoria.

### Diseño

- Nueva paleta "cálida y serena". Conserva tres colores de la marca (rosa `#D4878D`, rubor `#EEC4CE` y terracota `#BD673D`) y suma neutros cálidos (marfil, lino, cacao) más salvia y eucalipto para transmitir calma. El contraste de colores para accesibilidad (WCAG) está verificado.
- Nueva tipografía: Cormorant Garamond en los títulos (en línea con el logo) y Manrope en el texto.
- Animaciones discretas: títulos que suben línea por línea, foto revelada en forma de arco, secciones que aparecen al hacer scroll, transiciones suaves entre páginas y acordeones animados. Todo se desactiva si el usuario tiene activada la reducción de movimiento.
- Menú móvil a pantalla completa y botón fijo de "Agendar valoración" en el celular.
- Se eliminaron las ilustraciones generadas con IA (unos 43 MB). La carpeta de imágenes pasó de unos 45 MB a 2 MB.

### Inicio

- Nueva estructura: hero, franja de datos verificables, guía rápida, cómo trabajo, áreas de atención, sobre mí, modalidades y precio, preguntas frecuentes, llamado a la acción y contacto.
- **Guía "¿No sabes por dónde empezar?"**: dos preguntas de opción múltiple que sugieren un área y arman un mensaje de WhatsApp ya escrito. Funciona sin IA, sin servidor y sin costo, e incluye un aviso de que no es un diagnóstico y de cuándo acudir a urgencias.
- Precio publicado: valoración inicial **$700 MXN, IVA incluido**.
- Se eliminó el formulario de nombre y mensaje. Ahora los botones abren WhatsApp directamente, así que el sitio ya no recaba datos personales.

### Áreas de atención

- **Nueva área: Musculoesquelética y posoperatoria** (cuello y espalda, hombro, rehabilitación posoperatoria, fracturas y esguinces, dolor persistente).
- Las 6 áreas usan una sola plantilla: encabezado con "Puede ser para ti si…", condiciones en acordeón (qué es, cómo lo trabajamos, para quién está indicado y un botón de WhatsApp por condición), cómo es la primera cita y enlaces a las demás áreas.
- Se reemplazaron las ventanas emergentes por contenido visible en la página, lo que también ayuda en buscadores.
- Se reescribieron las frases que prometían resultados ("eliminar los episodios de vértigo", "revertir la fragilidad", "crear nuevas conexiones neuronales", "disminuir la inflamación interna").

### Otras páginas

- **Preguntas frecuentes**: reorganizadas en 4 grupos e integradas las 6 preguntas de Marisol sobre la fisioterapia. Se aclaró que la factura solo se emite con pago con tarjeta o transferencia, y que los seguros funcionan por reembolso.
- **Formación** (`/certificaciones/`): línea de tiempo académica, cursos con enlace a su constancia, enlace para verificar la cédula en la SEP y lugares con los que ha colaborado.
- **Nuevo: Aviso de privacidad** (`/aviso-de-privacidad/`), conforme a la LFPDPPP. Incluye los datos sensibles de salud, las transferencias a aseguradoras para reembolso, los derechos ARCO y la conservación del expediente según la NOM-004. *En revisión legal.*
- **Nuevo: Términos y políticas de cita** (`/terminos/`): cancelación con 24 horas, tolerancia de 15 minutos, paquetes con vigencia de 60 días naturales, atención a domicilio, atención en línea con consentimiento informado (reforma a la Ley General de Salud del 15 de enero de 2026, artículos 71 Bis a 71 Octies) y facturación. *En revisión legal.*
- Nueva página 404.

### Información legal y sanitaria

- Pie de página en todas las páginas con el responsable sanitario, la licenciatura, la institución, la cédula profesional 13020634 y los números de COFEPRIS:
  - Aviso de funcionamiento: 2609155036A00046
  - Aviso de publicidad: 2609152002A00352
- Horario alineado con el aviso de funcionamiento: lunes a sábado de 7:00 a 20:00.
- Nombre de la licenciatura corregido a "Terapia Física y Rehabilitación", como aparece en el aviso.
- Se corrigieron "Narvarte" por "Roma Sur", "certificada" y "especialista", y se eliminó "500 pacientes atendidos exitosamente".
- El año del copyright ahora es dinámico.

### Técnico

- Se eliminaron Bootstrap, Font Awesome y `node_modules`. Ahora hay un solo CSS (`css/zarvela.css`, con variables de diseño), un solo JS (`js/zarvela.js`) y un archivo de íconos SVG (`img/icons.svg`).
- El número de WhatsApp está centralizado en `js/zarvela.js` (`WHATSAPP`). Los enlaces usan el atributo `data-wa="mensaje"`.
- SEO: etiqueta canonical, Open Graph y meta descripción propias en cada página, schema `Physiotherapy` con el horario y la dirección correctos, `sitemap.xml` y `robots.txt`.
- SEO: el H1 del inicio ahora es "Fisioterapia en Roma Sur, CDMX". La frase "Atención con tiempo, movimiento con calma" conserva su diseño como texto destacado (`.display`).
- Accesibilidad: enlace para saltar al contenido, etiquetas ARIA en el menú y la guía, foco visible y textos alternativos descriptivos.
- `.gitignore` agregado. Excluye `node_modules/` y `avisos/` (documentos oficiales con datos personales).

### Pendiente

- Visto bueno de Marisol al diseño y a las respuestas redactadas para sus preguntas.
- Confirmar la frase textual de "Sobre mí" y el contenido del área musculoesquelética y de la oncológica (linfedema, suelo pélvico).
- Revisión legal del aviso de privacidad y de los términos.
- Sesión de fotos profesionales para reemplazar la foto actual y renovar la imagen para redes (`zarvela-og-image.png`).
- Precio del paquete de 10 sesiones.
