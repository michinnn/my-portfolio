import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

const repoName = 'mai-portfolio';

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base: `/${repoName}/`,
})
