import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'create-nojekyll',
      closeBundle() {
        writeFileSync('./.nojekyll', '')
        writeFileSync('./dist/.nojekyll', '')
      }
    }
  ],
  base: '/songbook/',
})
