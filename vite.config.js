
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/updated-portfolio/', 
  plugins: [react()],
});
