import type { Meta, StoryObj } from "@storybook/react"
import { RichTextCodeBlock } from "./RichTextCodeBlock"
import {
  mockBashCodeBlok,
  mockCSSCodeBlok,
  mockEmptyCodeBlok,
  mockHTMLCodeBlok,
  mockJavaScriptCodeBlok,
  mockJSONCodeBlok,
  mockNoContentCodeBlok,
  mockPlainTextCodeBlok,
  mockTypeScriptCodeBlok,
} from "./RichTextCodeBlock.mocks"

const meta: Meta<typeof RichTextCodeBlock> = {
  title: "Storyblok/RichTextCodeBlock",
  component: RichTextCodeBlock,
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

export const JavaScript: Story = {
  args: {
    blok: mockJavaScriptCodeBlok,
  },
}

export const TypeScript: Story = {
  args: {
    blok: mockTypeScriptCodeBlok,
  },
}

export const CSS: Story = {
  args: {
    blok: mockCSSCodeBlok,
  },
}

export const HTML: Story = {
  args: {
    blok: mockHTMLCodeBlok,
  },
}

export const JSONData: Story = {
  args: {
    blok: mockJSONCodeBlok,
  },
}

export const Bash: Story = {
  args: {
    blok: mockBashCodeBlok,
  },
}

export const PlainText: Story = {
  args: {
    blok: mockPlainTextCodeBlok,
  },
}

export const Empty: Story = {
  args: {
    blok: mockEmptyCodeBlok,
  },
}

export const NoContent: Story = {
  args: {
    blok: mockNoContentCodeBlok,
  },
}

export const TabletView: Story = {
  args: {
    blok: mockTypeScriptCodeBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: {
    blok: mockJavaScriptCodeBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
