import type { ReactNode } from "react"
import "./GridMaster.css"
import { CustomElement } from "../CustomElement"

interface GridMasterProps {
  children?: ReactNode
}

export function GridMaster({ children }: GridMasterProps): React.JSX.Element {
  return <CustomElement tag="grid-master">{children}</CustomElement>
}
