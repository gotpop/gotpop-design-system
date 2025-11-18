import { CustomElement } from "@gotpop/system"
import "./PageLayout.css"

interface PageLayoutProps {
  children?: React.ReactNode
  className?: string
  header: React.ReactNode
  footer: React.ReactNode
}

export async function PageLayout({
  children,
  footer,
  header,
}: PageLayoutProps) {
  return (
    <CustomElement tag="page-layout">
      {header}
      <main>
        <CustomElement tag="box-crosshatch">{children}</CustomElement>
      </main>
      {footer}
    </CustomElement>
  )
}
