export interface StoryblokStoryResponse<T = unknown> {
  full_slug: string
  slug: string
  content: T
}

export interface StoryblokStoriesResponse {
  stories: StoryblokStoryResponse[]
}
