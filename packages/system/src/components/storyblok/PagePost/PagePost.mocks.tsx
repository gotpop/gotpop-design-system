import type {
  PagePostStoryblok,
  RichTextBlockStoryblok,
} from "../../../types/storyblok-components"
import { RichTextBlock } from "../RichTextBlock"
import { Typography } from "../Typography"

// Mock header and footer components (consistent with other page components)
export const mockSimpleHeader = (
  <header
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "4rem",
    }}
  ></header>
)

export const mockSimpleFooter = (
  <footer
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "10rem",
    }}
  ></footer>
)

// Rich text content blocks for blog posts
export const mockBlogPostContent: RichTextBlockStoryblok = {
  _uid: "post-content-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Welcome to this comprehensive guide on modern web development practices. In this post, we'll explore the latest trends and techniques that are shaping the industry.",
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Introduction to Modern Development",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "The landscape of web development has evolved significantly over the past few years. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Performance, accessibility, and user experience",
          },
          {
            type: "text",
            text: " have become the cornerstone principles that guide our development decisions.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "In this article, we'll dive deep into these concepts and provide practical examples that you can implement in your projects today.",
          },
        ],
      },
    ],
  },
}

export const mockTechnicalPostContent: RichTextBlockStoryblok = {
  _uid: "post-content-2",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This technical deep-dive covers advanced implementation patterns and best practices for scalable applications.",
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Key Implementation Details",
          },
        ],
      },
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Component architecture and reusability patterns",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Performance optimization strategies",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Testing methodologies and automation",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Simple content blocks
export const mockShortPostContent = (
  <div>
    <Typography tag="p" variant="text-base" shade="charcoal">
      This is a brief blog post with minimal content to demonstrate the post
      layout structure.
    </Typography>
  </div>
)

export const mockEmptyPostContent = (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <Typography tag="p" variant="text-base" shade="light">
      No content available for this post.
    </Typography>
  </div>
)

// Mock PagePost bloks
export const mockBlogPostBlok: PagePostStoryblok = {
  _uid: "post-1",
  component: "page_post",
  heading: "Modern Web Development Best Practices",
  published_date: "2024-11-15T10:30:00.000Z",
  description:
    "A comprehensive guide to modern web development practices and techniques.",
  tags: ["web-development", "best-practices", "frontend"],
  view_transition_name: "post-transition",
}

export const mockTechnicalPostBlok: PagePostStoryblok = {
  _uid: "post-2",
  component: "page_post",
  heading: "Advanced React Patterns and Performance",
  published_date: "2024-11-10T14:15:00.000Z",
  description:
    "Deep dive into advanced React patterns for building performant applications.",
  tags: ["react", "performance", "patterns", "javascript"],
  view_transition_name: "tech-post-transition",
}

export const mockSimplePostBlok: PagePostStoryblok = {
  _uid: "post-3",
  component: "page_post",
  heading: "Quick Tips for Better Code",
  published_date: "2024-11-12T09:00:00.000Z",
  description: "Simple tips to improve your coding practices.",
  tags: ["tips", "coding"],
}

export const mockPostWithoutDateBlok: PagePostStoryblok = {
  _uid: "post-4",
  component: "page_post",
  heading: "Post Without Date",
  description: "This post doesn't have a published date.",
  tags: ["example"],
}

export const mockPostWithoutHeadingBlok: PagePostStoryblok = {
  _uid: "post-5",
  component: "page_post",
  published_date: "2024-11-08T16:45:00.000Z",
  description: "This post doesn't have a heading.",
  tags: ["example"],
}

// Content block variations
export const mockBlogPostBlocks = <RichTextBlock blok={mockBlogPostContent} />

export const mockTechnicalPostBlocks = (
  <RichTextBlock blok={mockTechnicalPostContent} />
)

// Shared args for stories
export const sharedArgs = {
  header: mockSimpleHeader,
  footer: mockSimpleFooter,
}
