import "server-only"

import type { ConfigStoryblok, NotFoundStoryblok } from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

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
    const { header: headerUuid = "", footer: footerUuid = "", body } = blok

    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    const storyblokApi = getInitializedStoryblokApi()

    const fetchHeader = async () => {
      if (!headerUuid) return null
      
      return await storyblokApi.get("cdn/stories", {
        version: "published",
        by_uuids: headerUuid,
      })
    }

    const fetchFooter = async () => {
      if (!footerUuid) return null

      return await storyblokApi.get("cdn/stories", {
        version: "published",
        by_uuids: footerUuid,
      })
    }

    const headerResponse = await fetchHeader()
    const footerResponse = await fetchFooter()

    const headerStory = headerResponse?.data?.stories?.[0]
    const headerContent = headerStory?.content

    const header = headerContent ? (
      <StoryblokServerComponent
        blok={headerContent}
        config={config}
      />
    ) : null

    const footerStory = footerResponse?.data?.stories?.[0]
    const footerContent = footerStory?.content

    const footer = footerContent ? (
      <StoryblokServerComponent
        blok={footerContent}
        config={config}
      />
    ) : null

    const blocks = body?.map((nestedBlok: SbBlokData) => (
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
