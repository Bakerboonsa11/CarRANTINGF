import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        './', // Allow your project root directory
        '/home/bonsa/BIGPROJECT/FRONT-CARRAN/node_modules/@fortawesome', // Allow FontAwesome webfonts
      ],
    },
  },
})
