import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // added tailwind
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // added tailwind
  resolve:{ //
    alias:{ //
      "@": path.resolve(__dirname,"./src"), //@ -> alias so that we can use it to shorten the path name when we import
    },
  },
})
