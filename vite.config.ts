// vite.config.ts — mirrors the ForgeBound/RS3 line: React 19 + Tailwind v4 + single-file
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    plugins: [react(), tailwindcss(), viteSingleFile()],
                            base: './',
                            build: { target: 'esnext' },
});
