import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // github 部署地址
  // base:'/mangosteen-pages-1/dist/',
  plugins: [vue()]
})
