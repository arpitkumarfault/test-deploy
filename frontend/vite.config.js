import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
  proxy:{
    "/api":"https://test-deploy-main-backend.onrender.com",
  }
  },
  plugins: [react()],
})
