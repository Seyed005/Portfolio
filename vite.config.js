import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { certificatesPlugin } from './vite.certificates.js'

export default defineConfig({
  plugins: [react(), tailwindcss(), certificatesPlugin()],
})
