import { addons } from "storybook/manager-api"
import gotPop from "./gotpop"

addons.setConfig({
  theme: gotPop,
  sidebar: {
    showRoots: false,
  },
})
