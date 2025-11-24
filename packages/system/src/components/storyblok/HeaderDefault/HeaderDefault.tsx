import type {
  ConfigStoryblok,
  HeaderDefaultStoryblok,
} from "../../../types/storyblok-components"
import "./HeaderDefault.css"

interface HeaderDefaultProps {
  blok: HeaderDefaultStoryblok
  nav?: React.ReactNode
  logo?: React.ReactNode
  config?: ConfigStoryblok | null
  popover?: React.ReactNode
}

export async function HeaderDefault({
  blok: _blok,
  nav,
  logo,
  config: _config,
  popover,
}: HeaderDefaultProps) {
  return (
    <header className="header">
      {logo}
      {nav}
      {popover}
    </header>
  )
}
