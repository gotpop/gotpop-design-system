import type { Meta, StoryObj } from "@storybook/react"
import { PageLayout } from "./PageLayout"
import {
  mockEmptyContent,
  mockFullContent,
  mockMinimalContent,
  mockRichContent,
  mockSimpleFooter,
  mockSimpleHeader,
} from "./PageLayout.mocks"

const meta: Meta<typeof PageLayout> = {
  title: "Storyblok/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    header: mockSimpleHeader,
    footer: mockSimpleFooter,
    children: mockMinimalContent,
  },
  argTypes: {
    header: {
      description: "Header React node",
      control: false,
    },
    footer: {
      description: "Footer React node",
      control: false,
    },
    children: {
      description: "Main content React nodes",
      control: false,
    },
    className: {
      description: "Optional CSS class name",
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tablet: Story = {
  args: {
    children: mockRichContent,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  args: {
    children: mockFullContent,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}

export const WithRichContent: Story = {
  args: {
    children: mockRichContent,
  },
}

export const WithFullContent: Story = {
  args: {
    children: mockFullContent,
  },
}

export const EmptyContent: Story = {
  args: {
    children: mockEmptyContent,
  },
}
