import type { Meta, StoryObj } from "@storybook/react"
import { HeroDefault } from "./HeroDefault"
import {
  mockBlogHeroBlok,
  mockEmptyHeadingHeroBlok,
  mockFullHeroBlok,
  mockLongHeadingHeroBlok,
  mockNoSubheadingHeroBlok,
  mockProductHeroBlok,
  mockShortHeroBlok,
  mockSimpleHeroBlok,
} from "./HeroDefault.mocks"

const meta: Meta<typeof HeroDefault> = {
  title: "Storyblok/HeroDefault",
  component: HeroDefault,
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

export const Simple: Story = {
  args: {
    blok: mockSimpleHeroBlok,
  },
}

export const Full: Story = {
  args: {
    blok: mockFullHeroBlok,
  },
}

export const Product: Story = {
  args: {
    blok: mockProductHeroBlok,
  },
}

export const Blog: Story = {
  args: {
    blok: mockBlogHeroBlok,
  },
}

export const Short: Story = {
  args: {
    blok: mockShortHeroBlok,
  },
}

export const LongHeading: Story = {
  args: {
    blok: mockLongHeadingHeroBlok,
  },
}

export const EmptyHeading: Story = {
  args: {
    blok: mockEmptyHeadingHeroBlok,
  },
}

export const NoSubheading: Story = {
  args: {
    blok: mockNoSubheadingHeroBlok,
  },
}

export const TabletView: Story = {
  args: {
    blok: mockFullHeroBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: {
    blok: mockProductHeroBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
