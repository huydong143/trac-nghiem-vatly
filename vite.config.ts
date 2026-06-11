import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/trac-nghiem-vatly/', // <--- THÊM CHÍNH XÁC DÒNG NÀY VÀO ĐÂY
})
