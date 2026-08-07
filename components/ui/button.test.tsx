/**
 * Copyright (C) 2026 Mustaque Nadim
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"

/**
 * A deliberately small smoke test. Its job is to prove the whole test harness
 * works end to end — React 19 rendering, jsdom, Testing Library, and the "@/"
 * path alias — by exercising a component that imports Base UI, cva, and cn.
 */
describe("Button", () => {
  it("renders its children as an accessible button", () => {
    render(<Button>Delete</Button>)

    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument()
  })

  it("applies the data-slot attribute used for styling hooks", () => {
    render(<Button>Save</Button>)

    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute(
      "data-slot",
      "button"
    )
  })

  it("forwards the disabled state to the underlying element", () => {
    render(<Button disabled>Submit</Button>)

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled()
  })
})
