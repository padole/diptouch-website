import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During development, requests to /api are forwarded to the Flask backend.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
