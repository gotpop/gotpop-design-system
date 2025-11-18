import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { LinkList } from "./LinkList"
import {
  mockNavigationLinkList,
  mockResourcesLinkList,
  mockSocialLinkList,
} from "./LinkList.mocks"

const meta: Meta<typeof LinkList> = {
  title: "Storyblok/LinkList",
  component: LinkList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GridMaster>
        <main style={{ padding: "2rem", maxWidth: "800px" }}>
          <Story />
        </main>
      </GridMaster>
    ),
  ],
  args: {
    blok: mockNavigationLinkList,
  },
  argTypes: {
    blok: {
      description: "Storyblok link list component data",
      control: "object",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tablet: Story = {
  args: {
    blok: mockSocialLinkList,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  args: {
    blok: mockResourcesLinkList,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}
