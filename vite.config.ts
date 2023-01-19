import { type Plugin, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";

const sourcemap = !!process.env.VSCODE_DEBUG;
const isBuild = process.argv.slice(2).includes("build");

// Load .env
function loadEnvPlugin(): Plugin {
  return {
    name: "vite-plugin-load-env",
    config(config, env) {
      const root = config.root ?? process.cwd();
      const result = loadEnv(env.mode, root);
      // Remove the vite-plugin-electron injected env.
      delete result.VITE_DEV_SERVER_URL;
      config.esbuild ??= {};
      config.esbuild.define = {
        ...config.esbuild.define,
        ...Object.fromEntries(
          Object.entries(result).map(([key, val]) => [
            `process.env.${key}`,
            JSON.stringify(val),
          ])
        ),
      };
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  server: process.env.VSCODE_DEBUG
    ? (() => {
        const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
        return {
          host: url.hostname,
          port: +url.port,
        };
      })()
    : undefined,
  clearScreen: false,
});
