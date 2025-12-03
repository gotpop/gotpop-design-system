import type {
  CardsStoryblok,
  ConfigStoryblok,
  PostProps,
  TagDatasourceEntry,
} from "../../../types"
import { Card } from "../Card"

// Mock configuration
export const mockConfig: ConfigStoryblok = {
  component: "Config",
  app_name: "GotPop Blog",
  description: "A blog about web development",
  root_name_space: "blog",
  primary_content_name_space: "blog",
  _uid: "config-123",
}

// Mock tags for filtering
export const mockTags: TagDatasourceEntry[] = [
  { name: "React", value: "react", id: 1 },
  { name: "TypeScript", value: "typescript", id: 2 },
  { name: "Next.js", value: "nextjs", id: 3 },
  { name: "CSS", value: "css", id: 4 },
  { name: "JavaScript", value: "javascript", id: 5 },
  { name: "Design", value: "design", id: 6 },
  { name: "Performance", value: "performance", id: 7 },
  { name: "Accessibility", value: "accessibility", id: 8 },
]

// Mock post factory function
export const createMockPost = (
  id: string,
  overrides: Partial<PostProps> = {}
): PostProps => ({
  uuid: `post-${id}`,
  full_slug: `blog/post-${id}`,
  name: `Blog Post ${id}`,
  published_at: new Date(2024, 0, parseInt(id, 10)).toISOString(),
  content: {
    component: "page_post",
    Heading: `Example Blog Post ${id}`,
    description: `This is the description for blog post ${id}. It provides a brief overview of what readers can expect.`,
    published_date: new Date(2024, 0, parseInt(id, 10)).toISOString(),
    tags: ["react", "typescript"],
    view_transition_name: `post-${id}`,
    _uid: `post-content-${id}`,
  },
  ...overrides,
})

export const mockPosts: PostProps[] = [
  createMockPost("1", {
    content: {
      component: "page_post",
      Heading: "Getting Started with React Server Components",
      description:
        "Learn how to build faster web applications using React Server Components with Next.js 14.",
      tags: ["react", "nextjs", "performance"],
      view_transition_name: "rsc-guide",
      _uid: "rsc-post",
    },
  }),
  createMockPost("2", {
    content: {
      component: "page_post",
      Heading: "TypeScript Best Practices for 2024",
      description:
        "Discover modern TypeScript patterns and techniques for building maintainable applications.",
      tags: ["typescript", "javascript"],
      view_transition_name: "ts-best-practices",
      _uid: "ts-post",
    },
  }),
  createMockPost("3", {
    content: {
      component: "page_post",
      Heading: "Modern CSS Grid Techniques",
      description:
        "Master CSS Grid with practical examples and real-world layout patterns.",
      tags: ["css", "design"],
      view_transition_name: "css-grid",
      _uid: "css-post",
    },
  }),
  createMockPost("4", {
    content: {
      component: "page_post",
      Heading: "Web Accessibility in 2024",
      description:
        "Essential techniques for building inclusive web experiences that work for everyone.",
      tags: ["accessibility", "design"],
      view_transition_name: "a11y-guide",
      _uid: "a11y-post",
    },
  }),
  createMockPost("5", {
    content: {
      component: "page_post",
      Heading: "Performance Optimization Strategies",
      description:
        "Proven methods for making your web applications faster and more efficient.",
      tags: ["performance", "javascript"],
      view_transition_name: "perf-guide",
      _uid: "perf-post",
    },
  }),
  createMockPost("6", {
    content: {
      component: "page_post",
      Heading: "Building Design Systems at Scale",
      description:
        "How to create and maintain design systems that grow with your organization.",
      tags: ["design", "css"],
      view_transition_name: "design-systems",
      _uid: "design-post",
    },
  }),
]

// Mock Cards blok configuration
export const mockCardsBlok: CardsStoryblok = {
  component: "cards",
  heading: "Latest Articles",
  subheading: "Discover the latest insights and tutorials",
  use_filters: false,
  _uid: "cards-123",
}

// Create mock blocks for static mode
export const createMockBlocks = (
  posts: PostProps[],
  config?: ConfigStoryblok | null
) => posts.map((post) => <Card key={post.uuid} blok={post} config={config} />)
