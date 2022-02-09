import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { md } from "./plugins/md";
import { vueShowCode } from "./plugins/vue-show-code";
export default defineConfig({
    base: '',
    server: {
        port: 3100
    },
    plugins: [
        vue(),
        md,
        vueShowCode
    ],
});
