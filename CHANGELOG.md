# Registro de cambios

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
