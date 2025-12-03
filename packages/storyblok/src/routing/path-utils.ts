/** Extracts tag slug from URL segments for tag-based filtering */
export function extractTagSlug(slug?: string[]): string | null {
  // This function can be kept for specific tag-based filtering logic
  // that doesn't rely on hardcoded "posts" assumptions
  if (!slug || slug.length < 2) {
    return null
  }

  // Return the last segment as potential tag slug
  return slug[slug.length - 1]
}
