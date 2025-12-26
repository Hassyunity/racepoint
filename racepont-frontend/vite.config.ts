import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',                         // écoute toutes les interfaces réseau
    allowedHosts: ['racepoint-h.onrender.com'], // autorise le host Render
  },
})
