import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    base: "/Markify-test-task/",
    server: {
        watch: {
            usePolling: true,
        },
    },
});4