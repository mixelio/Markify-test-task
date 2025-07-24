import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    base: "/markify-test-task/",
    server: {
        watch: {
            usePolling: true,
        },
    },
});