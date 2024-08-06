import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  base: '/RendiChickenNew/',  // Replace with the name of your GitHub repository
})
