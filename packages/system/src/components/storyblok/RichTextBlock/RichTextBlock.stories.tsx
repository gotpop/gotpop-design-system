import type { Meta, StoryObj } from "@storybook/react"
import { RichTextBlock } from "./RichTextBlock"
import {
  mockArticleRichTextBlok,
  mockBasicRichTextBlok,
  mockEmptyRichTextBlok,
  mockListRichTextBlok,
  mockNoContentRichTextBlok,
  mockQuoteRichTextBlok,
  mockShortRichTextBlok,
} from "./RichTextBlock.mocks"

const meta: Meta<typeof RichTextBlock> = {
  title: "Storyblok/RichTextBlock",
  component: RichTextBlock,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    blok: { control: "object" },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    blok: mockBasicRichTextBlok,
  },
}

export const Article: Story = {
  args: {
    blok: mockArticleRichTextBlok,
  },
}

export const WithLists: Story = {
  args: {
    blok: mockListRichTextBlok,
  },
}

export const WithQuote: Story = {
  args: {
    blok: mockQuoteRichTextBlok,
  },
}

export const Short: Story = {
  args: {
    blok: mockShortRichTextBlok,
  },
}

export const Empty: Story = {
  args: {
    blok: mockEmptyRichTextBlok,
  },
}

export const NoContent: Story = {
  args: {
    blok: mockNoContentRichTextBlok,
  },
}

export const TabletView: Story = {
  args: {
    blok: mockArticleRichTextBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: {
    blok: mockArticleRichTextBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
