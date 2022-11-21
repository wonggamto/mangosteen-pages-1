import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  // github 部署地址
  // base:'/mangosteen-pages-1/dist/',
  plugins: [
    vue(),
    vueJsx({
      transformOn:true,
      mergeProps:true
    })
  ]
})
