import "server-only"

import { getConfig } from "../../config/runtime-config"
import type { StoryblokDataResult, StoryblokStoryResponse } from "../../types"
import { getInitializedStoryblokApi } from "../get-storyblok-data"

/** Returns available story slugs for error page */
export async function handleAvailableStoriesForError(): Promise<StoryblokDataResult> {
  /** Fetch Storyblok config to get root_name_space */
  const storyblokConfig = await getConfig()
  const prefix = storyblokConfig?.root_name_space || "blog"

  const storyblokApi = getInitializedStoryblokApi()
  const storiesResponse = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: `${prefix}/`,
  })

  const stories = storiesResponse.data?.stories as StoryblokStoryResponse[]

  return {
    data: stories?.map((s: StoryblokStoryResponse) => s.full_slug) || [],
  }
}
