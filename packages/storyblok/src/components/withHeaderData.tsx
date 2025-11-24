import "server-only"

import type { ConfigStoryblok, HeaderDefaultStoryblok } from "@gotpop/system"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getStoryblokData } from "../data/get-storyblok-data"

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

    const { data: popoverData } = blok.popover_select
      ? await getStoryblokData("storyByUuid", { uuid: blok.popover_select })
      : { data: null }

    const popover = popoverData?.content ? (
      <StoryblokServerComponent blok={popoverData.content} config={config} />
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
