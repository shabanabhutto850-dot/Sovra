import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// For Replit: read PORT and BASE_PATH from env. For Netlify / local: use safe defaults.
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const basePath = process.env.BASE_PATH ?? "/";

const isReplit =
  process.env.REPL_ID !== undefined && process.env.NODE_ENV !== "production";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(isReplit
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default(),
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({ root: path.resolve(import.meta.dirname, "..") }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Don't inline videos — keep them as separate files served from /videos/
    assetsInlineLimit: 0,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: { strict: false },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
