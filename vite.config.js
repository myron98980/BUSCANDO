import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Importamos el módulo 'path' de Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Aquí creamos el atajo: '@' ahora apunta a la carpeta 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
})