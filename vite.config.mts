import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: '(fill)',
              },
            },
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              },
            },
          ],
          floatPrecision: 2,
        },
      },
      include: '**/*.svg',
    }),
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    host: 'localhost', // Указывает серверу слушать только на localhost
    port: 3000, // Указываем порт (например, 3000)
    strictPort: true, // Убедиться, что используется именно этот порт
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    // Available api
    // https://react-project-backend-r9fx.onrender.com/
    // https://reactprojectbackend-mynmea5b.b4a.run/
    __API__: JSON.stringify('http://localhost:8000'),
    __API_GraphQL__: JSON.stringify('http://localhost:8002'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});
