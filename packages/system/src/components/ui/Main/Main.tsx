import type { ReactNode } from "react"
import "./Main.css"

interface MainProps {
  children?: ReactNode
}

export function Main({ children }: MainProps): React.JSX.Element {
  return <main>{children}</main>
}
