/**
 * Content prefix for multi-tenant Storyblok setup
 * Falls back to "blog" if not set
 */
const CONTENT_PREFIX = process.env.STORYBLOK_CONTENT_PREFIX || "blog"

/**
 * Converts a Storyblok full_slug to a clean URL path
 * Removes the content prefix (blog/ or portfolio/) and ensures it starts with '/'
 *
 * @example
 * // With STORYBLOK_CONTENT_PREFIX=blog
 * getStoryPath("blog/posts/post-1") → "/posts/post-1"
 *
 * // With STORYBLOK_CONTENT_PREFIX=portfolio
 * getStoryPath("portfolio/work/post-1") → "/work/post-1"
 */
export function getStoryPath(fullSlug: string): string {
  if (!fullSlug) return "/"

  // Remove content prefix dynamically (e.g., "blog/" or "portfolio/")
  let path = fullSlug
  if (fullSlug.startsWith(`${CONTENT_PREFIX}/`)) {
    path = fullSlug.slice(CONTENT_PREFIX.length + 1)
  }

  // Handle special cases
  if (path === "home" || path === "" || path === "/") {
    return "/"
  }

  // Handle index pages (ending with /) - remove trailing slash
  if (path.endsWith("/") && path !== "/") {
    const cleanPath = path.slice(0, -1)
    return `/${cleanPath}`
  }

  // Ensure leading slash for all other paths
  return path.startsWith("/") ? path : `/${path}`
}
