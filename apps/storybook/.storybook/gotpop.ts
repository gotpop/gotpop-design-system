import { create } from "storybook/theming"

// const light500 = "#808080"
// const primary500 = "#720073"
// const secondary400 = "#007595"
// const secondary700 = "#001b3c"
// const secondary900 = "#000000"

const dark300 = "#161616"
const dark400 = "#2e2e2e"
const primary200 = "#d466d2"
const secondary200 = "#00b5d5"
const secondary800 = "#000021"
const white = "#ffffff"

export default create({
  base: "dark",
  fontBase:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  fontCode: '"Monospace", "SF Mono", "Monaco", "Consolas", monospace',
  brandTitle: "GotPop System Storybook",
  brandUrl: "https://github.com/gotpop/system",
  brandImage:
    "https://a.storyblok.com/f/287776322113402/117x50/09c61ba628/logo-small.png",
  brandTarget: "_self",
  colorPrimary: primary200,
  colorSecondary: secondary200,
  appBg: secondary800,
  appContentBg: dark300,
  appPreviewBg: white,
  appBorderColor: dark400,
  appBorderRadius: 0,
  textColor: white,
  textInverseColor: white,
  barTextColor: white,
  barSelectedColor: primary200,
  barHoverColor: primary200,
  barBg: dark400,
  inputBg: white,
  inputBorder: white,
  inputTextColor: white,
  inputBorderRadius: 0,
  buttonBg: secondary800,
  buttonBorder: secondary200,
})
