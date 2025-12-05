import "server-only"

import type {
  CardsServerStoryblok,
  ConfigStoryblok,
  TagDatasourceEntry,
} from "@gotpop/system"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

interface WithCardsDataProps {
  blok: CardsServerStoryblok
  blocks: ReactNode
  availableTags: TagDatasourceEntry[]
  config: ConfigStoryblok | null
}

/** Higher-Order Component that fetches posts and tags data for the Cards component */
export function withCardsData(
  ViewComponent: React.ComponentType<WithCardsDataProps>
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: CardsServerStoryblok
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    const storyblokApi = getInitializedStoryblokApi()
    const tagsResult = await storyblokApi.get("cdn/datasources/tags")
    const { target_index: targetIndex } = blok

    const targetStoryResult = await storyblokApi.get(`cdn/stories`, {
      version: "published",
      by_uuids: targetIndex,
      excluding_fields: "body,header,footer,created_at,_uid,component,content",
    })

    const targetDirectory = targetStoryResult.data.stories[0]?.full_slug || ""

    const postsStoriesResult = await storyblokApi.get("cdn/stories", {
      starts_with: targetDirectory,
      version: "published",
      is_startpage: false,
      excluding_fields: "body,header,footer,created_at,_uid,component",
    })

    const postsDataRaw = postsStoriesResult.data?.stories

    const posts = Array.isArray(postsDataRaw)
      ? postsDataRaw.map(({ uuid, content, full_slug }) => {
          const metaData = content?.meta_data_page || []

          return {
            _uid: uuid,
            component: "card",
            meta_data_page: metaData,
            full_slug,
          }
        })
      : []

    const availableTags = tagsResult.data?.datasource_entries || []

    const blocks = posts.map((post) => (
      <StoryblokServerComponent key={post._uid} blok={post} config={config} />
    ))

    return (
      <ViewComponent
        blok={blok}
        blocks={blocks}
        availableTags={availableTags}
        config={config}
        posts={posts}
      />
    )
  }
}
