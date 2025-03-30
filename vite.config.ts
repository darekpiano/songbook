import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, mkdirSync, copyFileSync, readdirSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-songs',
      closeBundle() {
        // Create .nojekyll file
        writeFileSync('./.nojekyll', '')
        writeFileSync('./dist/.nojekyll', '')

        // Copy song files
        const songsDir = resolve(__dirname, 'src/data/songs')
        const distSongsDir = resolve(__dirname, 'dist/data/songs')
        
        try {
          mkdirSync(distSongsDir, { recursive: true })
          const songFiles = readdirSync(songsDir).filter(file => file.endsWith('.cho'))
          songFiles.forEach(file => {
            copyFileSync(
              resolve(songsDir, file),
              resolve(distSongsDir, file)
            )
          })
        } catch (error) {
          console.error('Error copying song files:', error)
        }
      }
    }
  ],
  base: '/songbook/',
})
