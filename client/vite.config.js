import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to expose the server
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use Render's PORT or fallback to 5173
  },
})
