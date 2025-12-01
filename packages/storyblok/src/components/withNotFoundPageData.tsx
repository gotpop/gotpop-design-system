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
    const { header: headerUuid = "", footer: footerUuid = "" } = blok

    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    const storyblokApi = getInitializedStoryblokApi()

    let headerResponse = null
    let footerResponse = null

    try {
      if (headerUuid) {
        headerResponse = await storyblokApi.get("cdn/stories", {
          version: "published",
          by_uuids: headerUuid,
        })
      }
    } catch (error) {
      console.warn(
        `[withNotFoundPageData] Failed to fetch header with UUID: ${headerUuid}`,
        error
      )
    }

    try {
      if (footerUuid) {
        footerResponse = await storyblokApi.get("cdn/stories", {
          version: "published",
          by_uuids: footerUuid,
        })
      }
    } catch (error) {
      console.warn(
        `[withNotFoundPageData] Failed to fetch footer with UUID: ${footerUuid}`,
        error
      )
    }

    const header = headerResponse?.data?.stories?.[0]?.content ? (
      <StoryblokServerComponent
        blok={headerResponse.data.stories[0].content}
        config={config}
      />
    ) : null

    const footer = footerResponse?.data?.stories?.[0]?.content ? (
      <StoryblokServerComponent
        blok={footerResponse.data.stories[0].content}
        config={config}
      />
    ) : null

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
