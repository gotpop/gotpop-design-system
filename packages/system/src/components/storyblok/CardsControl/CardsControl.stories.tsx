import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { CardsControl } from "./CardsControl"
import { categoryOptions, sortOptions, tagOptions } from "./CardsControl.mocks"

const withGridMaster =
  (cssVars = {}) =>
  (Story: any) => (
    <GridMaster>
      <main style={cssVars as React.CSSProperties}>
        <Story />
      </main>
    </GridMaster>
  )

const meta: Meta<typeof CardsControl> = {
  title: "Storyblok/CardsControl",
  component: CardsControl,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onChange: (value: string) => {
      console.log("CardsControl value changed:", value)
    },
  },
  argTypes: {
    label: {
      description: "Label text for the control",
      control: "text",
    },
    value: {
      description: "Currently selected value",
      control: "text",
    },
    onChange: {
      description: "Callback function when value changes",
      action: "changed",
    },
    options: {
      description: "Array of options for the select dropdown",
    },
    className: {
      description: "Optional CSS class name",
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [withGridMaster()],
  args: {
    label: "Sort",
    value: "published_desc",
    options: sortOptions,
  },
}

export const Tablet: Story = {
  decorators: [withGridMaster({ "--grid-column": "span 2" })],
  args: {
    label: "Filter by Tag",
    value: "react",
    options: tagOptions,
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  decorators: [withGridMaster({ "--grid-column": "1 / -1" })],
  args: {
    label: "Category",
    value: "tutorials",
    options: categoryOptions,
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
