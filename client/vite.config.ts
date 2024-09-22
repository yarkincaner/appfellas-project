import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
import dotenv from 'dotenv'

// Load environment variables from the custom .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') }) // Adjust path as needed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env.API_BASE_URL_DEVELOPMENT': JSON.stringify(
      process.env.API_BASE_URL_DEVELOPMENT
    )
  }
})
