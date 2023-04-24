import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cors from 'cors';

export default defineConfig({
  plugins: [react({
    // Exclude storybook stories
    exclude: /\.stories\.(t|j)sx?$/,
    // Only .tsx files
    include: '**/*.tsx'
  })],
  server: {
    middleware: [
      cors({
        origin: 'https://icbc.local:10443',
        headers: {
          'Access-Control-Allow-Origin': 'https://icbc.local:10443', // Agrega el encabezado CORS
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
    ],
    hmr: {
      protocol: "wss",
      host: "localhost",
      port: 5173,
    },
  },
});