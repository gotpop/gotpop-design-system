import "server-only"

import type {
  CardsStoryblok,
  ConfigStoryblok,
  PostProps,
  TagDatasourceEntry,
} from "@gotpop/system"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

interface WithCardsDataProps {
  blok: CardsStoryblok
  blocks: ReactNode
  posts: PostProps[]
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
    blok: CardsStoryblok
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())
    const prefix = config?.root_name_space

    const storyblokApi = getInitializedStoryblokApi()
    const tagsResult = await storyblokApi.get("cdn/datasources/tags")

    const postsStoriesResult = await storyblokApi.get("cdn/stories", {
      starts_with: prefix,
      version: "published",
      is_startpage: false,
      excluding_fields: "body",
      filter_query: {
        component: {
          in: "page_post",
        },
      },
    })

    const postsDataRaw = postsStoriesResult.data?.stories
    const posts = Array.isArray(postsDataRaw)
      ? postsDataRaw.map(
          ({ uuid, content, full_slug, name, published_at }) => ({
            _uid: uuid,
            component: "card",
            content,
            full_slug,
            name,
            published_at,
            uuid,
          })
        )
      : []

    const availableTags = tagsResult.data?.datasource_entries || []

    const blocks = posts.map((post) => (
      <StoryblokServerComponent key={post._uid} blok={post} config={config} />
    ))

    return (
      <ViewComponent
        blok={blok}
        blocks={blocks}
        posts={posts}
        availableTags={availableTags}
        config={config}
      />
    )
  }
}
