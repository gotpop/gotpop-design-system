import "server-only"

import { getStoryblokApi } from "@storyblok/react/rsc"
import type { StoryblokDataResult, StoryblokDataType } from "../types"
import { getErrorMessage } from "../utils/error-handling"
import { handleStaticParams } from "./handlers"

/** Simplified Storyblok data fetching function - gradually replacing complex handlers with direct API access */
export async function getStoryblokData(
  dataType: StoryblokDataType
): Promise<StoryblokDataResult> {
  try {
    switch (dataType) {
      case "staticParams":
        return handleStaticParams()

      default:
        return { data: null, error: `Unknown data type: ${dataType}` }
    }
  } catch (error) {
    const errorMessage = getErrorMessage(error)

    return {
      data: null,
      error: errorMessage,
    }
  }
}

/** Export the initialized storyblokApi for components transitioning to direct API calls */
export function getInitializedStoryblokApi() {
  const api = getStoryblokApi()
  if (!api) {
    throw new Error(
      "Storyblok API not initialized. Ensure getStoryblokData has been called first."
    )
  }
  return api
}
