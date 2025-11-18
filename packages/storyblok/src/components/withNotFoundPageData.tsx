import "server-only"

import type {
  ConfigStoryblok,
  FooterDefaultStoryblok,
  HeaderDefaultStoryblok,
  NotFoundStoryblok,
} from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getStoryblokData } from "../data/get-storyblok-data"

interface WithNotFoundPageDataProps {
  header: ReactNode
  footer: ReactNode
  blok: NotFoundStoryblok
  blocks: ReactNode
  availableStories?: string[]
}

/** Higher-Order Component for NotFound page that includes availableStories */
export function withNotFoundPageData(
  ViewComponent: React.ComponentType<WithNotFoundPageDataProps>
) {
  return async ({
    blok,
    config: providedConfig,
    availableStories,
  }: {
    blok: NotFoundStoryblok
    config?: ConfigStoryblok | null
    availableStories?: string[]
  }) => {
    const { header: headerUuid = "", footer: footerUuid = "" } = blok

    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    const { data: headerData } = await getStoryblokData<HeaderDefaultStoryblok>(
      "storyByUuid",
      { uuid: headerUuid }
    )

    const { data: footerData } = await getStoryblokData<FooterDefaultStoryblok>(
      "storyByUuid",
      { uuid: footerUuid }
    )

    const header = (
      <StoryblokServerComponent blok={headerData.content} config={config} />
    )

    const footer = (
      <StoryblokServerComponent blok={footerData.content} config={config} />
    )

    const blocks = blok.body?.map((nestedBlok: SbBlokData) => (
      <StoryblokServerComponent
        blok={nestedBlok}
        key={nestedBlok._uid}
        config={config}
      />
    ))

    return (
      <ViewComponent
        blok={blok}
        blocks={blocks}
        header={header}
        footer={footer}
        availableStories={availableStories}
      />
    )
  }
}
