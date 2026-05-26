# Biothermics de Colombia - Sitio corporativo

Stack: **Next.js + React + TypeScript + Tailwind CSS** con App Router y exportación estática.

## 1) Instalar dependencias
```bash
npm install
```

## 2) Ejecutar en desarrollo
```bash
npm run dev
```
Abrir: `http://localhost:3000`

## 3) Construir para producción
```bash
npm run build
```

## 4) Exportación estática
La exportación estática queda configurada en `next.config.ts` con:
- `output: "export"`
- `images.unoptimized: true`

Al ejecutar `npm run build`, Next genera la salida estática en `out/`.

## 5) Previsualizar estático
Puedes servir `out/` con cualquier servidor estático, por ejemplo:
```bash
npx serve out
```

## 6) Dónde poner el logo
Ubica los archivos en `public/brand/`:
- `/brand/logo-biothermics-principal.png`
- `/brand/logo-biothermics-secundario.png`
- `/brand/favicon.png`
- `/brand/og-biothermics.png`

Mientras no existan, el sitio usa un fallback visual de marca en `components/BrandLogo.tsx`.

## 7) Dónde cambiar textos, teléfono, correo y WhatsApp
- Textos de contenido por sección: `components/*.tsx`
- Datos base de marca/contacto: `lib/constants.ts`
  - `WHATSAPP_NUMBER`
  - `CONTACT_EMAIL`
  - `CONTACT_PHONE`

## 8) Despliegue en Nginx (general)
1. Ejecuta `npm run build`.
2. Copia la carpeta `out/` al servidor.
3. Configura Nginx para servir ese directorio como sitio estático.
4. Apunta el dominio `biothermics.com` al bloque de servidor correspondiente.

