import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { CardsFilterClient } from "./CardsFilterClient"
import {
  additionalMockPosts,
  additionalMockTags,
  mockConfig,
  mockPosts,
  mockTags,
} from "./CardsFilterClient.mocks"

const meta: Meta<typeof CardsFilterClient> = {
  title: "Storyblok/CardsFilterClient",
  component: CardsFilterClient,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GridMaster>
        <main>
          <Story />
        </main>
      </GridMaster>
    ),
  ],
  argTypes: {
    posts: {
      description: "Array of post data to filter and display",
    },
    availableTags: {
      description: "Array of available tags for filtering",
    },
    config: {
      description: "Storyblok configuration object",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    posts: mockPosts,
    availableTags: mockTags,
    config: mockConfig,
  },
}

export const WithManyPosts: Story = {
  args: {
    posts: [...mockPosts, ...additionalMockPosts],
    availableTags: [...mockTags, ...additionalMockTags],
    config: mockConfig,
  },
}

export const Tablet: Story = {
  args: {
    posts: mockPosts,
    availableTags: mockTags,
    config: mockConfig,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  args: {
    posts: mockPosts,
    availableTags: mockTags,
    config: mockConfig,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}
