import type {
  HeroDefaultStoryblok,
  PageDefaultStoryblok,
  RichTextBlockStoryblok,
} from "../../../types/storyblok-components"
import { HeroDefault } from "../HeroDefault"
import { RichTextBlock } from "../RichTextBlock"

// Mock content blocks
export const mockHeroBlock: HeroDefaultStoryblok = {
  _uid: "hero-1",
  component: "hero_default",
  heading: "Welcome to Our Website",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Discover amazing content and innovative solutions that will transform your digital experience.",
          },
        ],
      },
    ],
  },
}

export const mockRichTextBlock: RichTextBlockStoryblok = {
  _uid: "richtext-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This is a sample rich text content block that demonstrates how content flows within a page layout. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Bold text",
          },
          {
            type: "text",
            text: " and ",
          },
          {
            type: "text",
            marks: [{ type: "italic" }],
            text: "italic text",
          },
          {
            type: "text",
            text: " are supported.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Multiple paragraphs help demonstrate the page content structure and layout capabilities.",
          },
        ],
      },
    ],
  },
}

export const mockSecondRichTextBlock: RichTextBlockStoryblok = {
  _uid: "richtext-2",
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
            text: "About Our Services",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "We provide comprehensive solutions for modern web development, focusing on performance, accessibility, and user experience.",
          },
        ],
      },
    ],
  },
}

// Mock page configurations
export const mockSimplePageBlok: PageDefaultStoryblok = {
  _uid: "page-1",
  component: "page_default",
  header: "header-1",
  footer: "footer-1",
  body: [mockHeroBlock, mockRichTextBlock],
}

export const mockContentPageBlok: PageDefaultStoryblok = {
  _uid: "page-2",
  component: "page_default",
  header: "header-1",
  footer: "footer-1",
  body: [mockHeroBlock, mockRichTextBlock, mockSecondRichTextBlock],
}

export const mockLandingPageBlok: PageDefaultStoryblok = {
  _uid: "page-3",
  component: "page_default",
  header: "header-1",
  footer: "footer-1",
  body: [mockHeroBlock],
}

// Mock React nodes for simple header/footer
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
export const mockSimplePageBlocks = (
  <>
    <HeroDefault blok={mockHeroBlock} />
    <RichTextBlock blok={mockRichTextBlock} />
  </>
)

export const mockContentPageBlocks = (
  <>
    <HeroDefault blok={mockHeroBlock} />
    <RichTextBlock blok={mockRichTextBlock} />
    <RichTextBlock blok={mockSecondRichTextBlock} />
  </>
)

export const mockLandingPageBlocks = (
  <>
    <HeroDefault blok={mockHeroBlock} />
  </>
)
