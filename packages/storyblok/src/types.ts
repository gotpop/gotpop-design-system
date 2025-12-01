export type StoryblokDataResult<T = unknown> = {
  data: T
  error?: string
}

export type StoryblokDataType = "staticParams"

export interface BaseConfig {
  version?: "draft" | "published"
}

/** Union type for all possible configurations */
export type StoryblokDataConfig = BaseConfig

export interface StoryblokStoryResponse<T = unknown> {
  full_slug: string
  slug: string
  content: T
}

export interface StoryblokStoriesResponse {
  stories: StoryblokStoryResponse[]
}
