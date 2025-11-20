import type { ReactNode } from "react"
import "./StorybookBackground.css"

interface StorybookBackgroundProps {
  children: ReactNode
  variant?: "secondary-700" | "primary" | "dark" | "light"
  className?: string
}

export function StorybookBackground({
  children,
  variant = "secondary-700",
  className = "",
  style,
}: StorybookBackgroundProps & { style?: React.CSSProperties }) {
  return (
    <div
      className={`storybook-background storybook-background--${variant} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
