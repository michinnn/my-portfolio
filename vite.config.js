import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // replace with your repo name if different
  base: '/mai-portfolio/',
  plugins: [react()],
});
