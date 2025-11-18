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
}

export async function HeaderDefault({
  blok: _blok,
  nav,
  logo,
  config: _config,
}: HeaderDefaultProps) {
  return (
    <header className="header">
      {logo}
      {nav}
    </header>
  )
}
