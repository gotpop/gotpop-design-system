import "server-only"

import { getStoryblokApi } from "@storyblok/react/rsc"

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
