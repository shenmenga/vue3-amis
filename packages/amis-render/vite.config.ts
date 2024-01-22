// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import vueJSX from '@vitejs/plugin-vue-jsx';
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'index',
            fileName: 'index',
        },

        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'axios', 'sass', '@q-front-npm/http'],
        },
    },
    plugins: [vue(), vueJSX(), dts({ rollupTypes: true, include: './src', entryRoot: './src', })],
});
