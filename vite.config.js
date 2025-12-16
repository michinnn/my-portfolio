import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mai-portfolio/',
  plugins: [react()],
});
