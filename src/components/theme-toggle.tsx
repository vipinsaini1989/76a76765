"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun, Laptop } from "lucide-react"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const current = theme;
  console.log("🚀 ~ ThemeToggle ~ current:", current)

  return (
    <div className="inline-flex items-center gap-1 rounded border bg-card px-1 py-1">
      <button
        aria-label="Light mode"
        className={`rounded px-2 py-1 text-xs ${current === "light" ? "bg-sky-600 text-white" : "hover:bg-muted"}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-4" />
      </button>
      <button
        aria-label="Dark mode"
        className={`rounded px-2 py-1 text-xs ${current === "dark" ? "bg-sky-600 text-white" : "hover:bg-muted"}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-4" />
      </button>
      <button
        aria-label="System mode"
        className={`rounded px-2 py-1 text-xs ${current === "system" ? "bg-sky-600 text-white" : "hover:bg-muted"}`}
        onClick={() => setTheme("system")}
      >
        <Laptop className="size-4" />
      </button>
    </div>
  )
}
