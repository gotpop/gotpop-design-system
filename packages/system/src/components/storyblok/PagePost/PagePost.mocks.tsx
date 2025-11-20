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
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Ut Enim Ad Minim Veniam",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Duis aute irure dolor",
          },
          {
            type: "text",
            text: " in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Totam Rem Aperiam",
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
                    text: "Neque porro quisquam est",
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
                    text: "Qui dolorem ipsum quia",
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
                    text: "Dolor sit amet consectetur",
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor.
    </Typography>
  </div>
)

export const mockEmptyPostContent = (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <Typography tag="p" variant="text-base" shade="light">
      Nullam quis risus eget urna mollis ornare vel eu leo.
    </Typography>
  </div>
)

// Mock PagePost bloks
export const mockBlogPostBlok: PagePostStoryblok = {
  _uid: "post-1",
  component: "page_post",
  heading: "Lorem Ipsum Dolor Sit Amet",
  published_date: "2024-11-15T10:30:00.000Z",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  tags: ["lorem", "ipsum", "dolor"],
  view_transition_name: "post-transition",
}

export const mockTechnicalPostBlok: PagePostStoryblok = {
  _uid: "post-2",
  component: "page_post",
  heading: "Sed Ut Perspiciatis Unde Omnis",
  published_date: "2024-11-10T14:15:00.000Z",
  description:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  tags: ["perspiciatis", "veniam", "laboris"],
  view_transition_name: "tech-post-transition",
}

export const mockSimplePostBlok: PagePostStoryblok = {
  _uid: "post-3",
  component: "page_post",
  heading: "Consectetur Adipiscing Elit",
  published_date: "2024-11-12T09:00:00.000Z",
  description: "Duis aute irure dolor in reprehenderit.",
  tags: ["consectetur", "adipiscing"],
}

export const mockPostWithoutDateBlok: PagePostStoryblok = {
  _uid: "post-4",
  component: "page_post",
  heading: "Excepteur Sint Occaecat",
  description: "Cupidatat non proident sunt in culpa.",
  tags: ["excepteur"],
}

export const mockPostWithoutHeadingBlok: PagePostStoryblok = {
  _uid: "post-5",
  component: "page_post",
  published_date: "2024-11-08T16:45:00.000Z",
  description: "Qui officia deserunt mollitia animi.",
  tags: ["officia"],
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
