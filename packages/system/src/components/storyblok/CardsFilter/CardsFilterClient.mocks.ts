import type { ConfigStoryblok } from "../../../types/storyblok-components"
import type { PostProps } from "../Card"
import type { TagDatasourceEntry } from "./CardsFilterClient"

export const mockPosts: PostProps[] = [
  {
    uuid: "post-1",
    full_slug: "blog/getting-started-with-nextjs",
    name: "Getting Started with Next.js",
    published_at: "2024-01-15T10:00:00Z",
    content: {
      _uid: "content-1",
      component: "page_post",
      Heading: "Getting Started with Next.js",
      description:
        "Learn the basics of Next.js and start building modern web applications with React.",
      published_date: "2024-01-15T10:00:00Z",
      tags: ["nextjs", "react", "beginner"],
      view_transition_name: "post-1",
    },
  },
  {
    uuid: "post-2",
    full_slug: "blog/advanced-react-patterns",
    name: "Advanced React Patterns",
    published_at: "2024-02-20T14:30:00Z",
    content: {
      _uid: "content-2",
      component: "page_post",
      Heading: "Advanced React Patterns",
      description:
        "Explore advanced React patterns and techniques for building scalable applications.",
      published_date: "2024-02-20T14:30:00Z",
      tags: ["react", "advanced", "patterns"],
      view_transition_name: "post-2",
    },
  },
  {
    uuid: "post-3",
    full_slug: "blog/css-grid-mastery",
    name: "CSS Grid Mastery",
    published_at: "2024-01-10T09:00:00Z",
    content: {
      _uid: "content-3",
      component: "page_post",
      Heading: "CSS Grid Mastery",
      description:
        "Master CSS Grid layout and create complex, responsive designs with ease.",
      published_date: "2024-01-10T09:00:00Z",
      tags: ["css", "grid", "layout"],
      view_transition_name: "post-3",
    },
  },
  {
    uuid: "post-4",
    full_slug: "blog/typescript-best-practices",
    name: "TypeScript Best Practices",
    published_at: "2024-03-05T16:45:00Z",
    content: {
      _uid: "content-4",
      component: "page_post",
      Heading: "TypeScript Best Practices",
      description:
        "Learn TypeScript best practices for better code quality and developer experience.",
      published_date: "2024-03-05T16:45:00Z",
      tags: ["typescript", "best-practices", "advanced"],
      view_transition_name: "post-4",
    },
  },
]

export const mockTags: TagDatasourceEntry[] = [
  { id: 1, name: "Next.js", value: "nextjs" },
  { id: 2, name: "React", value: "react" },
  { id: 3, name: "CSS", value: "css" },
  { id: 4, name: "TypeScript", value: "typescript" },
  { id: 5, name: "Advanced", value: "advanced" },
  { id: 6, name: "Beginner", value: "beginner" },
]

export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  root_name_space: "blog",
}

export const additionalMockPosts: PostProps[] = [
  {
    uuid: "post-5",
    full_slug: "blog/javascript-fundamentals",
    name: "JavaScript Fundamentals",
    published_at: "2024-04-12T11:20:00Z",
    content: {
      _uid: "content-5",
      component: "page_post",
      Heading: "JavaScript Fundamentals",
      description:
        "Understand the core concepts of JavaScript programming language.",
      published_date: "2024-04-12T11:20:00Z",
      tags: ["javascript", "beginner", "fundamentals"],
      view_transition_name: "post-5",
    },
  },
  {
    uuid: "post-6",
    full_slug: "blog/react-performance-tips",
    name: "React Performance Tips",
    published_at: "2024-05-18T13:15:00Z",
    content: {
      _uid: "content-6",
      component: "page_post",
      Heading: "React Performance Tips",
      description:
        "Optimize your React applications with these performance tips and techniques.",
      published_date: "2024-05-18T13:15:00Z",
      tags: ["react", "performance", "optimization"],
      view_transition_name: "post-6",
    },
  },
]

export const additionalMockTags: TagDatasourceEntry[] = [
  { id: 7, name: "JavaScript", value: "javascript" },
  { id: 8, name: "Performance", value: "performance" },
  { id: 9, name: "Optimization", value: "optimization" },
]
