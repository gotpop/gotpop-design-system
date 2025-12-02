import "server-only"

import type { ConfigStoryblok, HeaderDefaultStoryblok } from "@gotpop/system"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

interface WithHeaderDataProps {
  blok: HeaderDefaultStoryblok
  nav: ReactNode
  logo: ReactNode
  config: ConfigStoryblok | null
  popover: ReactNode
}

/** Higher-Order Component that renders nav, logo & popover components for the Header */
export function withHeaderData(
  ViewComponent: React.ComponentType<WithHeaderDataProps>
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: HeaderDefaultStoryblok
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())
    const { nav, logo, popover_select: popoverSelect } = blok

    const navComponent = nav?.[0] ? (
      <StoryblokServerComponent blok={nav[0]} config={config} />
    ) : null

    const logoComponent = logo?.[0] ? (
      <StoryblokServerComponent blok={logo[0]} config={config} />
    ) : null

    const storyblokApi = getInitializedStoryblokApi()

    const fetchPopover = async () => {
      if (!popoverSelect) return null
      
      return await storyblokApi.get("cdn/stories", {
        version: "published",
        by_uuids: popoverSelect,
      })
    }

    const popoverResult = await fetchPopover()
    const story = popoverResult?.data?.stories?.[0]
    const popoverContent = story?.content

    const popover = popoverContent ? (
      <StoryblokServerComponent
        blok={popoverContent}
        config={config}
      />
    ) : null

    return (
      <ViewComponent
        blok={blok}
        nav={navComponent}
        logo={logoComponent}
        popover={popover}
        config={config}
      />
    )
  }
}
