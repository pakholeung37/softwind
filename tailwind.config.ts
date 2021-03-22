import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
    theme: {
        extend: {
            borderRadius: {
                24: "6rem",
            },
        },
    },
});
