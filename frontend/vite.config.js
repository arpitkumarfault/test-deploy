import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
  proxy:{
    "/api":"https://test-deploy-backend-kfsw.onrender.com",
  }
  },
  plugins: [react()],
})
