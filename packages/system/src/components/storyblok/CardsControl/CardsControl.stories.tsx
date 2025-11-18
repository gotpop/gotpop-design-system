import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { CardsControl } from "./CardsControl"
import { categoryOptions, sortOptions, tagOptions } from "./CardsControl.mocks"

const meta: Meta<typeof CardsControl> = {
  title: "Storyblok/CardsControl",
  component: CardsControl,
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
  args: {
    label: "Sort",
    value: "published_desc",
    options: sortOptions,
  },
}

export const Tablet: Story = {
  args: {
    label: "Filter by Tag",
    value: "react",
    options: tagOptions,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  args: {
    label: "Category",
    value: "tutorials",
    options: categoryOptions,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}
