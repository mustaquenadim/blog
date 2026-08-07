/**
 * Copyright (C) 2026 Mustaque Nadim
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { describe, expect, it } from "vitest"

import { cn } from "@/lib/utils"

describe("cn", () => {
  it("resolves conflicting Tailwind utilities so the last one wins", () => {
    // This is the tailwind-merge layer. A refactor that dropped twMerge would
    // return "p-2 p-4" here and quietly break every component.
    expect(cn("p-2", "p-4")).toBe("p-4")
  })

  it("keeps utilities that do not conflict", () => {
    expect(cn("flex", "items-center")).toBe("flex items-center")
  })

  it("drops falsy values and supports conditional objects", () => {
    // This is the clsx layer, which a twMerge-only refactor would drop.
    expect(
      cn("flex", false && "hidden", null, undefined, {
        "gap-2": true,
        "gap-4": false,
      })
    ).toBe("flex gap-2")
  })

  it("flattens arrays of class values", () => {
    expect(cn(["rounded", ["border", "p-2"]])).toBe("rounded border p-2")
  })
})
