import type { Meta, StoryObj } from "@storybook/react"
import type { PostProps } from "./Card"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
  title: "Storyblok/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component for displaying blog post previews with metadata, title, description, and tags.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    blok: {
      description: "Post data including content and metadata",
      control: "object",
    },
    config: {
      description: "Configuration object with root namespace settings",
      control: "object",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Mock data for stories
const mockConfig = {
  component: "Config" as const,
  app_name: "GotPop Blog",
  root_name_space: "blog",
  primary_content_name_space: "blog",
  _uid: "config-123",
}

const baseMockPost: PostProps = {
  uuid: "12345-67890",
  full_slug: "blog/example-post",
  name: "Example Blog Post",
  published_at: "2024-01-15T10:30:00.000Z",
  content: {
    component: "page_post",
    Heading: "Building Modern Web Applications",
    description:
      "Learn how to create fast, accessible, and maintainable web applications using modern tools and best practices.",
    published_date: "2024-01-15T10:30:00.000Z",
    tags: ["development", "web", "javascript", "react"],
    view_transition_name: "post-12345",
    _uid: "post-content-123",
  },
}

export const Default: Story = {
  args: {
    blok: baseMockPost,
    config: mockConfig,
  },
}

export const WithoutConfig: Story = {
  args: {
    blok: baseMockPost,
    config: null,
  },
}

export const LongContent: Story = {
  args: {
    blok: {
      ...baseMockPost,
      content: {
        ...baseMockPost.content,
        Heading:
          "The Complete Guide to TypeScript: Advanced Patterns, Performance Optimization, and Best Practices for Large-Scale Applications",
        description:
          "This comprehensive guide covers everything you need to know about TypeScript, from basic types to advanced patterns like conditional types, mapped types, and template literal types. We'll explore performance optimization techniques, architectural patterns, and real-world best practices for building maintainable large-scale applications.",
        tags: [
          "typescript",
          "javascript",
          "development",
          "programming",
          "architecture",
          "performance",
          "best-practices",
        ],
      },
    },
    config: mockConfig,
  },
}

export const MinimalContent: Story = {
  args: {
    blok: {
      ...baseMockPost,
      content: {
        ...baseMockPost.content,
        Heading: "Quick Tip",
        description: "A short post.",
        tags: ["tips"],
      },
    },
    config: mockConfig,
  },
}

export const NoTags: Story = {
  args: {
    blok: {
      ...baseMockPost,
      content: {
        ...baseMockPost.content,
        tags: [],
      },
    },
    config: mockConfig,
  },
}

export const FallbackTitle: Story = {
  args: {
    blok: {
      ...baseMockPost,
      name: "Fallback Title from Name",
      content: {
        ...baseMockPost.content,
        Heading: undefined, // Will fall back to name
      },
    },
    config: mockConfig,
  },
}

export const UntitledPost: Story = {
  args: {
    blok: {
      ...baseMockPost,
      name: "",
      content: {
        ...baseMockPost.content,
        Heading: undefined,
      },
    },
    config: mockConfig,
  },
}

export const DifferentDateFormats: Story = {
  args: {
    blok: {
      ...baseMockPost,
      published_at: "2024-12-25T00:00:00.000Z",
      content: {
        ...baseMockPost.content,
        published_date: "2024-12-31T23:59:59.000Z", // Should use this over published_at
        Heading: "New Year's Resolution",
        description:
          "Planning for the upcoming year with better development practices.",
        tags: ["planning", "goals", "development"],
      },
    },
    config: mockConfig,
  },
}

export const TechPost: Story = {
  args: {
    blok: {
      ...baseMockPost,
      full_slug: "blog/react-server-components",
      name: "React Server Components Deep Dive",
      content: {
        ...baseMockPost.content,
        Heading: "Understanding React Server Components",
        description:
          "Explore the fundamentals of React Server Components, how they work, and when to use them in your Next.js applications for better performance and user experience.",
        tags: ["react", "nextjs", "server-components", "performance"],
        view_transition_name: "rsc-post",
      },
    },
    config: mockConfig,
  },
}

export const DesignPost: Story = {
  args: {
    blok: {
      ...baseMockPost,
      full_slug: "blog/design-systems",
      name: "Building Scalable Design Systems",
      content: {
        ...baseMockPost.content,
        Heading: "Design Systems at Scale",
        description:
          "Learn how to create and maintain design systems that grow with your team and product, including component libraries, design tokens, and documentation strategies.",
        tags: ["design", "design-systems", "components", "ui/ux"],
        view_transition_name: "design-systems-post",
      },
    },
    config: mockConfig,
  },
}
