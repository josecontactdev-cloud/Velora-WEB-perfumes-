# VELORA — perfumería e-commerce

Sitio web single-screen con siete perfumes, catálogo filtrable, fichas de producto, carrito persistente y pedido por WhatsApp.

## Ejecutar en tu computadora

1. Descomprime por completo el archivo ZIP.
2. Abre `index.html` con doble clic.

No necesitas instalar nada. Es importante abrir el archivo desde la carpeta descomprimida, no desde la vista previa del ZIP.

## Desarrollo opcional

Si quieres editar la página con recarga automática, necesitas Node.js 20 o superior:

```bash
npm install
npm run dev
```

Abre la dirección que aparezca en la terminal. La misma versión funciona tanto con doble clic como con el servidor local.

## Generar la versión de producción

```bash
npm run build
```

La página optimizada se genera dentro de la carpeta `dist`.

## Archivos principales

- `index.html`: estructura de la página.
- `styles.css`: diseño, colores y adaptación móvil.
- `script.js`: productos, carrusel, filtros, carrito y WhatsApp.
- `public/assets/perfumes`: fotografías optimizadas de los perfumes.

## Personalización importante

El número de WhatsApp se encuentra en `index.html` y `script.js`. Los productos, precios, descripciones y notas están al inicio de `script.js`.
