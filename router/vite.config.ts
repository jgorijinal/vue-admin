import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// @ts-ignore
import alias from './vite/alias';

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias
  }
})
