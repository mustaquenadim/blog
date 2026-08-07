/**
 * Copyright (C) 2026 Mustaque Nadim
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import "@testing-library/jest-dom/vitest"

import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

// Globals are disabled, so Testing Library's automatic cleanup does not run.
// Unmount between tests to keep the jsdom document isolated.
afterEach(() => {
  cleanup()
})
