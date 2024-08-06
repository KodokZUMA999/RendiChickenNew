import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: '/RendiChickenNew/',  // Replace 'your-repo-name' with the name of your GitHub repository
})
