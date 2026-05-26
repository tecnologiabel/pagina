# Biothermics de Colombia - sitio web multi página

Stack único: **Next.js + React + TypeScript + Tailwind CSS**.

## Ejecutar
```bash
npm install
npm run dev
```
Abrir: http://localhost:3000

## Compilar y exportar estático
```bash
npm run build
```
La salida estática queda en `out/` gracias a `output: "export"`.

## Páginas creadas
- `/` Inicio
- `/nosotros`
- `/soluciones`
- `/catalogo`
- `/sectores`
- `/contacto`

## Assets de marca e imágenes
- Logos: `public/brand/`
- Imágenes: `public/images/`
- Video institucional: `public/videos/biothermics-presentacion.mp4`

## Datos de contacto
Editar en `lib/constants.ts`.

## Nginx
Servir carpeta `out/` como sitio estático.
