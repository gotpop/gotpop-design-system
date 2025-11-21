import type { Meta, StoryObj } from "@storybook/react"
import { StorybookBackground } from "../../storybook"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { LinkList } from "./LinkList"
import { mockNavigationLinkList } from "./LinkList.mocks"

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
        <main>
          <StorybookBackground
            variant="grid-dark"
            style={{ padding: "2rem", gridColumn: "1 / -1" }}
          >
            <Story />
          </StorybookBackground>
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
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  globals: {
    viewport: { value: "mobile2" },
  },
}
