import "server-only"

import type { PostProps, TagDatasourceEntry } from "@gotpop/system"
import { getStoryblokApi } from "@storyblok/react/rsc"
import type {
  BaseConfig,
  PostsByTagConfig,
  StoryblokDataConfig,
  StoryblokDataResult,
  StoryblokDataType,
} from "../types"
import { getErrorMessage } from "../utils/error-handling"
import {
  handleAllPostsWithTags,
  handleAllTagsFromPosts,
  handleAvailableStoriesForError,
  handlePostsByTag,
  handleStaticParams,
  handleTagsFromDatasource,
  handleTagsFromPosts,
} from "./handlers"

/** Simplified Storyblok data fetching function - gradually replacing complex handlers with direct API access */
export async function getStoryblokData(
  dataType: StoryblokDataType,
  config: StoryblokDataConfig = {}
): Promise<StoryblokDataResult> {
  try {
    // const storyblokApi = getStoryblokApi()

    switch (dataType) {
      // Complex handlers with business logic - keep for now
      case "tagsFromDatasource":
        return handleTagsFromDatasource(getStoryblokData, config)

      case "tagsFromPosts":
        return handleTagsFromPosts(getStoryblokData)

      case "postsByTag":
        return handlePostsByTag(getStoryblokData, config as PostsByTagConfig)

      case "allPostsWithTags":
        return handleAllPostsWithTags(getStoryblokData, config as BaseConfig)

      case "allTagsFromPosts":
        return handleAllTagsFromPosts(getStoryblokData, config as BaseConfig)

      case "availableStoriesForError":
        return handleAvailableStoriesForError()

      case "staticParams":
        return handleStaticParams()

      default:
        return { data: null, error: `Unknown data type: ${dataType}` }
    }
  } catch (error) {
    const errorMessage = getErrorMessage(error)

    /* For datasource errors, provide a more helpful message */
    if (
      dataType === "datasourceEntries" &&
      errorMessage.includes("could not be found")
    ) {
      return {
        data: null,
        error: `Datasource not found`,
      }
    }

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

/** Gets all posts from the blog with their tags, only returns actual blog posts (page_post component) that have tags */
export async function getAllPostsWithTags(): Promise<PostProps[]> {
  const { data } = await getStoryblokData("allPostsWithTags")
  return data as PostProps[]
}

/** Fetches all tags from the Storyblok tags datasource, falls back to extracting tags from posts if datasource is not available */
export async function getTagsFromDatasource(): Promise<TagDatasourceEntry[]> {
  const { data } = await getStoryblokData("tagsFromDatasource")
  return data as TagDatasourceEntry[]
}
