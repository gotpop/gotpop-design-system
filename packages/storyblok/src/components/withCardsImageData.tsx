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
import { getStoryblokData } from "../data/get-storyblok-data"

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
    component: "card",
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

    const [postsResult, tagsResult] = await Promise.all([
      getStoryblokData("allPostsWithTags"),
      getStoryblokData("tagsFromDatasource"),
    ])

    const { data: postsResult2 } = await getStoryblokData("stories", {
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
      "[withCardsImageData] postsResult2:",
      JSON.stringify(postsResult2, null, 2)
    )

    // if (postsResult2.error || tagsResult.error) {
    //   console.error("[withCardsImageData] Error fetching data:", {
    //     postsError: postsResult2.error,
    //     tagsError: tagsResult.error,
    //   })
    // }

    // const posts = (postsResult2.data as PostProps[]) || []
    const availableTags = (tagsResult.data as TagDatasourceEntry[]) || []

    const blocks = postsResult2.map((post) => (
      <StoryblokServerComponent
        key={post.uuid}
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
