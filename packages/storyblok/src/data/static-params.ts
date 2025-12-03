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
    "config",
    "footer",
    "global",
    "header",
    "home",
    "not-found",
    "site-config",
  ]

  const excludingSlugs = excluded.map((slug) => `${prefix}/${slug}`).join(",")

  const allStoriesResponse = await storyblokApi.get("cdn/stories", {
    version: "published",
    starts_with: `${prefix}/`,
    excluding_slugs: excludingSlugs,
    excluding_fields: "content",
  })

  const allStories = allStoriesResponse.data
    ?.stories as StoryblokStoryResponse[]

  const createSlugParam = (story: StoryblokStoryResponse) => {
    const { full_slug } = story

    // Remove prefix from full_slug "blog/about" → "about"
    const pathWithoutPrefix = full_slug.startsWith(`${prefix}/`)
      ? full_slug.slice(prefix.length + 1)
      : full_slug

    // Ensure path starts with "/" and split into segments
    const normalizedPath = pathWithoutPrefix.startsWith("/")
      ? pathWithoutPrefix
      : `/${pathWithoutPrefix}`

    const slug = normalizedPath.slice(1).split("/")

    return { slug }
  }

  return [
    { slug: [] }, // Home page route
    ...allStories.map(createSlugParam),
  ]
}
