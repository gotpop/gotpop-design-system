import type { Meta, StoryObj } from "@storybook/react"
import { PageNotFound } from "./PageNotFound"
import {
  mockAvailableStories,
  mockFewAvailableStories,
  mockNotFoundBlok,
  mockNotFoundBlokNoTitle,
  mockNotFoundBlokShortTitle,
  notFoundContentBlocks,
  sharedArgs,
  shortContentBlocks,
} from "./PageNotFound.mocks"

const meta: Meta<typeof PageNotFound> = {
  title: "Storyblok/PageNotFound",
  component: PageNotFound,
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
    availableStories: { control: "object" },
  },
  args: sharedArgs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    blok: mockNotFoundBlok,
    blocks: notFoundContentBlocks,
    availableStories: mockAvailableStories,
  },
}

export const ShortTitle: Story = {
  args: {
    blok: mockNotFoundBlokShortTitle,
    blocks: shortContentBlocks,
    availableStories: mockFewAvailableStories,
  },
}

export const NoTitle: Story = {
  args: {
    blok: mockNotFoundBlokNoTitle,
    blocks: notFoundContentBlocks,
    availableStories: mockAvailableStories,
  },
}

export const NoAvailableStories: Story = {
  args: {
    blok: mockNotFoundBlok,
    blocks: notFoundContentBlocks,
    availableStories: undefined,
  },
}

export const Minimal: Story = {
  args: {
    blok: mockNotFoundBlokNoTitle,
    blocks: shortContentBlocks,
    availableStories: undefined,
  },
}

export const TabletView: Story = {
  args: {
    blok: mockNotFoundBlok,
    blocks: notFoundContentBlocks,
    availableStories: mockAvailableStories,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: {
    blok: mockNotFoundBlok,
    blocks: notFoundContentBlocks,
    availableStories: mockFewAvailableStories,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
