import type {
  HeroDefaultStoryblok,
  RichTextBlockStoryblok,
} from "../../../types/storyblok-components"
import { HeroDefault } from "../HeroDefault"
import { RichTextBlock } from "../RichTextBlock"

// Mock content blocks for different layout scenarios
export const mockLayoutHeroBlock: HeroDefaultStoryblok = {
  _uid: "hero-layout-1",
  component: "hero_default",
  heading: "Page Layout Component",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This demonstrates the PageLayout component with header, main content area, and footer structure.",
          },
        ],
      },
    ],
  },
}

export const mockLayoutContentBlock: RichTextBlockStoryblok = {
  _uid: "content-layout-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "The PageLayout component provides the fundamental page structure using CustomElement components. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "It includes proper semantic markup",
          },
          {
            type: "text",
            text: " with header, main, and footer elements.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Content is wrapped in a box-crosshatch CustomElement for proper styling and layout within the main content area.",
          },
        ],
      },
    ],
  },
}

export const mockLayoutSecondContentBlock: RichTextBlockStoryblok = {
  _uid: "content-layout-2",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Layout Features",
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
                    text: "Semantic HTML structure",
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
                    text: "CustomElement integration",
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
                    text: "Flexible content area",
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

// Mock content variations for different stories
export const mockMinimalContent = (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>Minimal Content</h1>
    <p>
      This is a simple content block for testing the basic layout structure.
    </p>
  </div>
)

export const mockRichContent = (
  <>
    <HeroDefault blok={mockLayoutHeroBlock} />
    <RichTextBlock blok={mockLayoutContentBlock} />
  </>
)

export const mockFullContent = (
  <>
    <HeroDefault blok={mockLayoutHeroBlock} />
    <RichTextBlock blok={mockLayoutContentBlock} />
    <RichTextBlock blok={mockLayoutSecondContentBlock} />
  </>
)

export const mockEmptyContent = (
  <div
    style={{
      padding: "4rem",
      textAlign: "center",
      color: "var(--neutral-500)",
    }}
  >
    <p>No content provided</p>
  </div>
)
