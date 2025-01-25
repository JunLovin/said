import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = path.resolve()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@public',
        replacement: path.resolve(__dirname, 'public')
      },
      {
        find: '@icons',
        replacement: path.resolve(__dirname, 'src/icons')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/styles')
      },
      {
        find: '@audio',
        replacement: path.resolve(__dirname, 'src/audio')
      }
    ]
  }
})
