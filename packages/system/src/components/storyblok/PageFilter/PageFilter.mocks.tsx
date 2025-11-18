import type { PostProps, TagDatasourceEntry } from "../../../types"
import type {
  CardsStoryblok,
  ConfigStoryblok,
  HeroDefaultStoryblok,
  PageFilterStoryblok,
} from "../../../types/storyblok-components"
import { Cards } from "../Cards"
import { HeroDefault } from "../HeroDefault"

// Mock posts data (similar to CardsFilterClient mocks)
export const mockFilterPosts: PostProps[] = [
  {
    uuid: "post-1",
    full_slug: "blog/react-fundamentals",
    name: "React Fundamentals",
    published_at: "2024-01-15T10:00:00Z",
    content: {
      _uid: "content-1",
      component: "page_post",
      Heading: "React Fundamentals",
      description:
        "Learn the basics of React and start building modern web applications.",
      published_date: "2024-01-15T10:00:00Z",
      tags: ["react", "javascript", "beginner"],
      view_transition_name: "post-1",
    },
  },
  {
    uuid: "post-2",
    full_slug: "blog/typescript-advanced",
    name: "Advanced TypeScript",
    published_at: "2024-02-20T14:30:00Z",
    content: {
      _uid: "content-2",
      component: "page_post",
      Heading: "Advanced TypeScript",
      description:
        "Explore advanced TypeScript patterns and techniques for better development.",
      published_date: "2024-02-20T14:30:00Z",
      tags: ["typescript", "advanced", "patterns"],
      view_transition_name: "post-2",
    },
  },
  {
    uuid: "post-3",
    full_slug: "blog/css-modern-techniques",
    name: "Modern CSS Techniques",
    published_at: "2024-01-10T09:00:00Z",
    content: {
      _uid: "content-3",
      component: "page_post",
      Heading: "Modern CSS Techniques",
      description:
        "Discover modern CSS techniques for building responsive and accessible designs.",
      published_date: "2024-01-10T09:00:00Z",
      tags: ["css", "design", "responsive"],
      view_transition_name: "post-3",
    },
  },
  {
    uuid: "post-4",
    full_slug: "blog/web-performance",
    name: "Web Performance Optimization",
    published_at: "2024-03-05T16:45:00Z",
    content: {
      _uid: "content-4",
      component: "page_post",
      Heading: "Web Performance Optimization",
      description:
        "Learn how to optimize your web applications for better performance and user experience.",
      published_date: "2024-03-05T16:45:00Z",
      tags: ["performance", "optimization", "advanced"],
      view_transition_name: "post-4",
    },
  },
]

export const mockFilterTags: TagDatasourceEntry[] = [
  { id: 1, name: "React", value: "react" },
  { id: 2, name: "TypeScript", value: "typescript" },
  { id: 3, name: "CSS", value: "css" },
  { id: 4, name: "JavaScript", value: "javascript" },
  { id: 5, name: "Performance", value: "performance" },
  { id: 6, name: "Advanced", value: "advanced" },
  { id: 7, name: "Beginner", value: "beginner" },
]

// Mock content blocks
export const mockFilterHeroBlock: HeroDefaultStoryblok = {
  _uid: "hero-filter-1",
  component: "hero_default",
  heading: "Blog Posts & Articles",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Explore our collection of articles, tutorials, and insights on web development, design, and technology.",
          },
        ],
      },
    ],
  },
}

export const mockCardsWithFilter: CardsStoryblok = {
  _uid: "cards-filter-1",
  component: "cards",
  heading: "Latest Posts",
  subheading: "Find articles that interest you",
  use_filters: true,
}

export const mockCardsWithoutFilter: CardsStoryblok = {
  _uid: "cards-simple-1",
  component: "cards",
  heading: "Featured Posts",
  subheading: "Our most popular articles",
  use_filters: false,
}

export const mockCardsMinimal: CardsStoryblok = {
  _uid: "cards-minimal-1",
  component: "cards",
  heading: "Recent Posts",
  use_filters: false,
}

// Mock page configurations
export const mockFilterPageBlok: PageFilterStoryblok = {
  _uid: "page-filter-1",
  component: "page_filter",
  header: "header-1",
  footer: "footer-1",
  body: [mockFilterHeroBlock, mockCardsWithFilter],
}

export const mockSimpleFilterPageBlok: PageFilterStoryblok = {
  _uid: "page-filter-2",
  component: "page_filter",
  header: "header-1",
  footer: "footer-1",
  body: [mockFilterHeroBlock, mockCardsWithoutFilter],
}

export const mockMinimalFilterPageBlok: PageFilterStoryblok = {
  _uid: "page-filter-3",
  component: "page_filter",
  header: "header-1",
  footer: "footer-1",
  body: [mockCardsMinimal],
}

// Mock config
export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  app_name: "GotPop Blog",
  description: "A modern blog built with Next.js and Storyblok",
  root_name_space: "blog",
  primary_content_name_space: "blog",
}

// Mock simple header/footer (reusing from PageDefault)
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

// Mock page content blocks
export const mockFilterPageBlocks = (
  <>
    <HeroDefault blok={mockFilterHeroBlock} />
    <Cards
      blok={mockCardsWithFilter}
      posts={mockFilterPosts}
      availableTags={mockFilterTags}
      config={mockConfig}
    />
  </>
)

export const mockSimpleFilterPageBlocks = (
  <>
    <HeroDefault blok={mockFilterHeroBlock} />
    <Cards
      blok={mockCardsWithoutFilter}
      posts={mockFilterPosts}
      availableTags={mockFilterTags}
      config={mockConfig}
    />
  </>
)

export const mockMinimalFilterPageBlocks = (
  <>
    <Cards
      blok={mockCardsMinimal}
      posts={mockFilterPosts.slice(0, 2)} // Only 2 posts for minimal
      availableTags={mockFilterTags.slice(0, 3)} // Only 3 tags
      config={mockConfig}
    />
  </>
)
