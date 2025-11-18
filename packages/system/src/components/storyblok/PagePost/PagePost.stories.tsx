import type { Meta, StoryObj } from "@storybook/react"
import { PagePost } from "./PagePost"
import {
  mockBlogPostBlocks,
  mockBlogPostBlok,
  mockEmptyPostContent,
  mockPostWithoutDateBlok,
  mockPostWithoutHeadingBlok,
  mockShortPostContent,
  mockSimplePostBlok,
  mockTechnicalPostBlocks,
  mockTechnicalPostBlok,
  sharedArgs,
} from "./PagePost.mocks"

const meta: Meta<typeof PagePost> = {
  title: "Storyblok/PagePost",
  component: PagePost,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    header: { control: false },
    footer: { control: false },
    blocks: { control: false },
    blok: { control: "object" },
  },
  args: sharedArgs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const BlogPost: Story = {
  args: {
    blok: mockBlogPostBlok,
    blocks: mockBlogPostBlocks,
  },
}

export const TechnicalPost: Story = {
  args: {
    blok: mockTechnicalPostBlok,
    blocks: mockTechnicalPostBlocks,
  },
}

export const SimplePost: Story = {
  args: {
    blok: mockSimplePostBlok,
    blocks: mockShortPostContent,
  },
}

export const PostWithoutDate: Story = {
  args: {
    blok: mockPostWithoutDateBlok,
    blocks: mockShortPostContent,
  },
}

export const PostWithoutHeading: Story = {
  args: {
    blok: mockPostWithoutHeadingBlok,
    blocks: mockShortPostContent,
  },
}

export const EmptyPost: Story = {
  args: {
    blok: mockSimplePostBlok,
    blocks: mockEmptyPostContent,
  },
}

export const TabletView: Story = {
  args: {
    blok: mockBlogPostBlok,
    blocks: mockBlogPostBlocks,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: {
    blok: mockTechnicalPostBlok,
    blocks: mockTechnicalPostBlocks,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
