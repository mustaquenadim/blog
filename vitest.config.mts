/**
 * Copyright (C) 2026 Mustaque Nadim
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Resolves the "@/*" alias from tsconfig.json so tests import exactly the
    // way application code does.
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules/**", ".next/**", "build/**", "out/**"],
    // Tailwind v4 runs through PostCSS. Processing it per test file costs time
    // and buys nothing: jsdom does no layout, so no assertion can depend on it.
    css: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: ["app/**", "components/**", "hooks/**", "lib/**"],
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/*.d.ts",
        // Vendored from shadcn/ui — see NOTICE.
        "components/ui/**",
        "hooks/use-mobile.ts",
      ],
    },
  },
})
