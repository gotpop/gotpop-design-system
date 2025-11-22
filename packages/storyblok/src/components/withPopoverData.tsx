import "server-only"

import type { ConfigStoryblok } from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"

interface PopoverBlok {
  content?: SbBlokData[]
  [key: string]: unknown
}

interface WithPopoverDataProps {
  blok: any
  content: ReactNode
  config: ConfigStoryblok | null
}

/** Higher-Order Component that renders popover content */
export function withPopoverData(
  ViewComponent: React.ComponentType<WithPopoverDataProps>
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: PopoverBlok
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    // Render nested content blocks from the popover blok (like withNavData does with nav_items)
    const content = blok.content?.map((contentBlok: SbBlokData) => (
      <StoryblokServerComponent
        blok={contentBlok}
        key={contentBlok._uid}
        config={config}
      />
    ))

    return (
      <ViewComponent
        blok={blok}
        content={content}
        config={config}
      />
    )
  }
}
