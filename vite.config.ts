import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa"

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    "name": "Chat App",
    "short_name": "Chat App",
    "description": "Chat App Frontend when users can chat.",
    "icons": [
      {
        "src": "/android-icon-36x36.png",
        "sizes": "36x36",
        "type": "image\/png",
        "density": "0.75"
      },
      {
        "src": "/android-icon-48x48.png",
        "sizes": "48x48",
        "type": "image\/png",
        "density": "1.0"
      },
      {
        "src": "/android-icon-72x72.png",
        "sizes": "72x72",
        "type": "image\/png",
        "density": "1.5"
      },
      {
        "src": "/android-icon-96x96.png",
        "sizes": "96x96",
        "type": "image\/png",
        "density": "2.0"
      },
      {
        "src": "/android-icon-144x144.png",
        "sizes": "144x144",
        "type": "image\/png",
        "density": "3.0"
      },
      {
        "src": "/android-icon-192x192.png",
        "sizes": "192x192",
        "type": "image\/png",
        "density": "4.0"
      },
      {
        "src": "/apple-touch-icon.png",
        "sizes": "180x180",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/maskable_icon_x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable",
      },
    ],
    "theme_color": "#171717",
    "background_color": "#e8ebf2",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "orientation": "portrait",
  },
};

export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})
