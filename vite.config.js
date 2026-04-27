import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Pon el nombre EXACTO de tu repositorio de GitHub entre diagonales
  base: '/seguimientocoaches/', 
})