import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["**/*.test.ts"],
    exclude: ["node_modules/**", "dist/**"],
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: {
      "^(.+/.*)\\.js$": "$1",
    },
  },
});
