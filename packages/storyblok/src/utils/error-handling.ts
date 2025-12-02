import "server-only"

import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"
import type { StoryblokStoryResponse } from "../types"

/** Fetches list of available story slugs for error page display */
export async function getAvailableStoriesForError(): Promise<string[]> {
  const storyblokConfig = await getConfig()
  const prefix = storyblokConfig?.root_name_space || "blog"

  const storyblokApi = getInitializedStoryblokApi()
  const storiesResponse = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: `${prefix}/`,
  })

  const stories = storiesResponse.data?.stories as StoryblokStoryResponse[]

  return stories?.map((story) => story.full_slug) || []
}

/** Extracts error message from various error types */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === "object" && error !== null) {
    if ("message" in error && typeof error.message === "string") {
      return error.message
    }

    if ("status" in error && "statusText" in error) {
      return `${error.status}: ${error.statusText}`
    }
  }

  return "Unknown error"
}
