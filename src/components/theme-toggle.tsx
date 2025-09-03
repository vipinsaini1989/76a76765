import { useTheme } from "next-themes"
import { Moon, Sun, Laptop } from "lucide-react"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const currentRaw = theme // 'system' | 'light' | 'dark'
  const resolved = resolvedTheme // 'light' | 'dark'

  const Icon = currentRaw === "system" ? Laptop : resolved === "dark" ? Moon : Sun
  const currentLabel = currentRaw === "system" ? "System" : resolved === "dark" ? "Dark" : "Light"
  const nextTheme = currentRaw === "system" ? "light" : currentRaw === "light" ? "dark" : "system"
  const nextLabel = nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)

  return (
    <button
      type="button"
      aria-label={`Toggle theme (${currentLabel}); Switch to ${nextLabel}`}
      title={`Switch theme: ${currentLabel} → ${nextLabel}`}
      className="inline-flex items-center justify-center rounded border bg-card p-2 text-foreground hover:bg-muted"
      onClick={() => setTheme(nextTheme)}
    >
      <Icon className="size-4" aria-hidden="true" />
      <span className="sr-only">{`Theme: ${currentLabel}. Click to switch to ${nextLabel}.`}</span>
    </button>
  )
}
