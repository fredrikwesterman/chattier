import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "fredrik-6l",
      project: "chattier",
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],

  build: {
    sourcemap: true,
  },
});
