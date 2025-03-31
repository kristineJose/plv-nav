import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vite";

export default defineConfig({
    assetsInclude: ["**/*.gltf"],
    base: "/plv-nav/",
    publicDir: "static/",
    server: {
        host: true,
    },  
    plugins: [basicSsl()],
});
