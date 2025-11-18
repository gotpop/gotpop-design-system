import type { Meta, StoryObj } from "@storybook/react"
import { PostHeader } from "./PostHeader"
import {
  mockBlogPost,
  mockCustomStyles,
  mockEmptyDate,
  mockEmptyHeading,
  mockInvalidDate,
  mockLongHeadingPost,
  mockNewsPost,
  mockNoDate,
  mockNoHeading,
  mockOldPost,
  mockRecentPost,
  mockShortPost,
  mockTechnicalPost,
  mockTutorialPost,
} from "./PostHeader.mocks"

const meta: Meta<typeof PostHeader> = {
  title: "Storyblok/PostHeader",
  component: PostHeader,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    heading: { control: "text" },
    publishedDate: { control: "text" },
    style: { control: "object" },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const BlogPost: Story = {
  args: mockBlogPost,
}

export const TechnicalPost: Story = {
  args: mockTechnicalPost,
}

export const NewsPost: Story = {
  args: mockNewsPost,
}

export const Tutorial: Story = {
  args: mockTutorialPost,
}

export const Short: Story = {
  args: mockShortPost,
}

export const LongHeading: Story = {
  args: mockLongHeadingPost,
}

export const OldPost: Story = {
  args: mockOldPost,
}

export const RecentPost: Story = {
  args: mockRecentPost,
}

export const WithCustomStyles: Story = {
  args: {
    ...mockBlogPost,
    style: mockCustomStyles,
  },
}

export const NoHeading: Story = {
  args: mockNoHeading,
}

export const NoDate: Story = {
  args: mockNoDate,
}

export const EmptyHeading: Story = {
  args: mockEmptyHeading,
}

export const EmptyDate: Story = {
  args: mockEmptyDate,
}

export const InvalidDate: Story = {
  args: mockInvalidDate,
}

export const TabletView: Story = {
  args: mockTechnicalPost,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: mockLongHeadingPost,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
