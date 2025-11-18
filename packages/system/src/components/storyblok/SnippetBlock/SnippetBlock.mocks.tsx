import type { SnippetBlockStoryblok } from "../../../types/storyblok-components"

// Mock snippet block variations
export const mockTextAlignASnippetBlok: SnippetBlockStoryblok = {
  _uid: "snippet-text-align-a-1",
  component: "snippet_block",
  snippet: "text-align-a",
}

export const mockTextAlignBSnippetBlok: SnippetBlockStoryblok = {
  _uid: "snippet-text-align-b-1",
  component: "snippet_block",
  snippet: "text-align-b",
}

export const mockUnknownSnippetBlok: SnippetBlockStoryblok = {
  _uid: "snippet-unknown-1",
  component: "snippet_block",
  snippet: "unknown-snippet-type",
}

export const mockInvalidSnippetBlok: SnippetBlockStoryblok = {
  _uid: "snippet-invalid-1",
  component: "snippet_block",
  snippet: "non-existent-snippet",
}

export const mockEmptySnippetBlok: SnippetBlockStoryblok = {
  _uid: "snippet-empty-1",
  component: "snippet_block",
  snippet: "",
}

export const mockNoSnippetBlok: SnippetBlockStoryblok = {
  _uid: "snippet-none-1",
  component: "snippet_block",
}
