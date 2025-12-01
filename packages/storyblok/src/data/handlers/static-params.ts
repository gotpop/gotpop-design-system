import "server-only"

import { getConfig } from "../../config/runtime-config"
import type { StoryblokDataResult, StoryblokStoryResponse } from "../../types"
import { getInitializedStoryblokApi } from "../get-storyblok-data"

/** Generates static params for pre-rendering pages */
export async function handleStaticParams(): Promise<StoryblokDataResult> {
  const config = await getConfig()

  if (!config) {
    throw new Error("Config is required for static params generation")
  }

  const prefix = config.root_name_space || "blog"
  const storyblokApi = getInitializedStoryblokApi()

  const allStoriesResponse = await storyblokApi.get("cdn/stories", {
    version: "published",
    starts_with: `${prefix}/`,
  })

  const allStories = allStoriesResponse.data
    ?.stories as StoryblokStoryResponse[]

  const excluded = [
    "header",
    "footer",
    "site-config",
    "config",
    "global",
    "not-found",
  ]

  const storyParams = allStories
    .filter((story: StoryblokStoryResponse) => {
      if (excluded.includes(story.full_slug)) return false
      for (const ex of excluded) {
        if (story.full_slug.includes(`/${ex}`)) return false
      }
      return story.full_slug.startsWith(`${prefix}/`)
    })
    .map((story: StoryblokStoryResponse) => {
      let path = story.full_slug

      if (path.startsWith(`${prefix}/`)) {
        path = path.slice(prefix.length + 1)
      }

      if (path === "home" || path === "") {
        path = "/"
      } else {
        path = path.startsWith("/") ? path : `/${path}`
      }

      const slug = path === "/" ? [] : path.slice(1).split("/")

      return { slug }
    })

  return { data: storyParams }
}
