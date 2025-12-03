import "server-only"

import type { ConfigStoryblok } from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

interface PageBlok {
  header?: string
  footer?: string
  body?: SbBlokData[]
  [key: string]: unknown
}

interface WithPageDataProps<T extends PageBlok> {
  header: ReactNode
  footer: ReactNode
  blok: T
  blocks: ReactNode
}

/** Higher-Order Component that fetches and renders header and footer components for a page */
export function withPageData<T extends PageBlok>(
  ViewComponent: React.ComponentType<WithPageDataProps<T>>
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: T
    config?: ConfigStoryblok | null
  }) => {
    const { header: headerUuid = "", footer: footerUuid = "" } = blok

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

    const headerData = headerResponse?.data?.stories?.[0]
    const footerData = footerResponse?.data?.stories?.[0]

    const header = headerData?.content ? (
      <StoryblokServerComponent blok={headerData.content} config={config} />
    ) : null

    const footer = footerData?.content ? (
      <StoryblokServerComponent blok={footerData.content} config={config} />
    ) : null

    const blocks = blok.body?.map((nestedBlok) => (
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
      />
    )
  }
}
