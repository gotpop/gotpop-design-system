import "../globals.css"
import type { Preview } from "@storybook/nextjs"

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    backgrounds: { disable: true },
    grid: { disable: true },
  },
}

export default preview
