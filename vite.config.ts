import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html", // Assuming you have an index.html as the entry point
    },
  },
});