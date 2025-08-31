import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // <- nombre exacto de tu repo
  plugins: [react()],
});