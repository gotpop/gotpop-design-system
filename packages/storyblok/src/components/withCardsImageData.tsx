import "server-only"

import type {
  CardsStoryblok,
  ConfigStoryblok,
  PostProps,
  TagDatasourceEntry,
} from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

interface WithCardsImageDataProps {
  blok: CardsStoryblok
  blocks: ReactNode
  posts: PostProps[]
  availableTags: TagDatasourceEntry[]
  config: ConfigStoryblok | null
}

/** Transforms PostProps data to SbBlokData format for StoryblokServerComponent */
function transformPostToBlok(post: PostProps): SbBlokData {
  return {
    ...post,
    component: "card_image",
    _uid: post.uuid,
  } as SbBlokData
}

/** Higher-Order Component that fetches posts and tags data for the Cards component */
export function withCardsImageData(
  ViewComponent: React.ComponentType<WithCardsImageDataProps>
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

    const storyblokApi = getInitializedStoryblokApi()
    const tagsResult = await storyblokApi.get("cdn/datasources/tags")

    const postsStoriesResult = await storyblokApi.get("cdn/stories", {
      starts_with: `portfolio`,
      version: "published",
      excluding_fields: "body",
      filter_query: {
        component: {
          in: "page_post_image",
        },
      },
    })

    console.log(
      "[withCardsImageData] postsStoriesResult:",
      JSON.stringify(postsStoriesResult, null, 2)
    )

    const postsDataRaw = postsStoriesResult.data?.stories
    const posts = Array.isArray(postsDataRaw)
      ? // biome-ignore lint/suspicious/noExplicitAny: temp
        (postsDataRaw as any[]).map((story) => ({
          uuid: story.uuid,
          full_slug: story.full_slug,
          name: story.name,
          published_at: story.published_at,
          content: story.content,
        }))
      : []
    const availableTags =
      (tagsResult.data?.datasource_entries as TagDatasourceEntry[]) || []

    const blocks = posts.map((post, idx) => (
      <StoryblokServerComponent
        key={post.uuid || idx}
        blok={transformPostToBlok(post)}
        config={config}
      />
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
