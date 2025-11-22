import "server-only"

import type { ConfigStoryblok } from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"

interface PopoverBlok {
  popover_uuid?: string
  [key: string]: unknown
}

interface WithPopoverDataProps {
  blok: any
  content: ReactNode
  config: ConfigStoryblok | null
}

/** Higher-Order Component that fetches and renders popover content */
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
    const config = providedConfig ?? (await getConfig())
    const popoverBlok = blok?.content

    console.log("popoverBlok !!!!!!!!!!!!!", popoverBlok)

    // Render nested content blocks from the popover blok
    const content = (popoverBlok as any)?.content?.map(
      (contentBlok: SbBlokData) => (
        <StoryblokServerComponent
          blok={contentBlok}
          key={contentBlok._uid}
          config={config}
        />
      )
    )

    return (
      <ViewComponent
        blok={popoverBlok as any}
        content={content}
        config={config}
      />
    )
  }
}
