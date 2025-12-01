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

/** Higher-Order Component that renders nav logo and popover components for the Header */
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
    const config = providedConfig ?? (await getConfig())

    const nav = blok.nav?.[0] ? (
      <StoryblokServerComponent blok={blok.nav[0]} config={config} />
    ) : null

    const logo = blok.logo?.[0] ? (
      <StoryblokServerComponent blok={blok.logo[0]} config={config} />
    ) : null

    const storyblokApi = getInitializedStoryblokApi()

    let popoverResponse = null
    if (blok.popover_select) {
      try {
        popoverResponse = await storyblokApi.get("cdn/stories", {
          version: "published",
          by_uuids: blok.popover_select,
        })
      } catch (error) {
        console.warn(
          `[withHeaderData] Failed to fetch popover with UUID: ${blok.popover_select}`,
          error
        )
      }
    }

    const popover = popoverResponse?.data?.stories?.[0]?.content ? (
      <StoryblokServerComponent
        blok={popoverResponse.data.stories[0].content}
        config={config}
      />
    ) : null

    return (
      <ViewComponent
        blok={blok}
        nav={nav}
        logo={logo}
        popover={popover}
        config={config}
      />
    )
  }
}
