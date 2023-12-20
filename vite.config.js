// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  server: {
    proxy: {
      // Add any proxy configurations if needed
    },
    // This configuration handles client-side routing and supports page refreshes
    fs: {
      strict: false,
    },
    hmr: {
      overlay: false,
    },
  },
});
