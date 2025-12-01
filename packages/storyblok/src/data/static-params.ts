import "server-only"

import { getConfig } from "../config/runtime-config"
import type { StoryblokStoryResponse } from "../types"
import { getInitializedStoryblokApi } from "./get-storyblok-data"

/** Generates static params for pre-rendering pages */
export async function getStaticParams(): Promise<{ slug: string[] }[]> {
  const config = await getConfig()

  if (!config) {
    throw new Error("Config is required for static params generation")
  }

  const prefix = config.root_name_space || "blog"
  const storyblokApi = getInitializedStoryblokApi()

  const excluded = [
    "header",
    "footer", 
    "site-config",
    "config",
    "global",
    "not-found",
    "home", 
  ]

  const excludingSlugs = excluded
    .map(slug => `${prefix}/${slug}`)
    .join(",")

  const allStoriesResponse = await storyblokApi.get("cdn/stories", {
    version: "published",
    starts_with: `${prefix}/`,
    excluding_slugs: excludingSlugs,
    excluding_fields: "content", 
  })

  const allStories = allStoriesResponse.data
    ?.stories as StoryblokStoryResponse[]

  return [
    { slug: [] }, // Home page route
    ...allStories.map((story: StoryblokStoryResponse) => {
      let path = story.full_slug

      if (path.startsWith(`${prefix}/`)) {
        path = path.slice(prefix.length + 1)
      }

      path = path.startsWith("/") ? path : `/${path}`
      const slug = path.slice(1).split("/")

      return { slug }
    })
  ]
}
