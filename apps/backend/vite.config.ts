import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/style/variable.scss";`,
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(process.cwd(), '.', 'src'),
        },
    },
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                })
            ],
        })
    ],
    server: {
        host: true,
        open: true,
        proxy: {
            '/dg-service/api': {
                target: 'https://dap.qmniu.com/dg-service/api',
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/dg-service\/api/, ''),
            },
        },
    },
});
