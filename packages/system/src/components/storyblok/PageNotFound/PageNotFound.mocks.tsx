import type { NotFoundStoryblok } from "../../../types/storyblok-components"
import { Typography } from "../Typography"

// Mock header and footer components (consistent with other page components)
export const mockSimpleHeader = (
  <header
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "4rem",
    }}
  ></header>
)

export const mockSimpleFooter = (
  <footer
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "10rem",
    }}
  ></footer>
)

// Rich text content blocks
export const notFoundContentBlocks = (
  <div>
    <Typography tag="p" variant="text-lg" shade="charcoal">
      The page you're looking for doesn't exist. It might have been moved,
      deleted, or you entered the wrong URL.
    </Typography>
    <Typography tag="p" variant="text-base" shade="charcoal">
      Don't worry, you can navigate back to the homepage or check out some of
      our other pages below.
    </Typography>
  </div>
)

export const shortContentBlocks = (
  <div>
    <Typography tag="p" variant="text-base" shade="charcoal">
      Sorry, this page couldn't be found.
    </Typography>
  </div>
)

// Mock data for NotFound component
export const mockNotFoundBlok: NotFoundStoryblok = {
  _uid: "not-found-1",
  component: "not_found",
  title: "404 - Page Not Found",
}

export const mockNotFoundBlokShortTitle: NotFoundStoryblok = {
  _uid: "not-found-2",
  component: "not_found",
  title: "Not Found",
}

export const mockNotFoundBlokNoTitle: NotFoundStoryblok = {
  _uid: "not-found-3",
  component: "not_found",
}

// Available stories lists
export const mockAvailableStories = [
  "home",
  "about",
  "blog",
  "portfolio",
  "contact",
  "services",
  "team",
  "projects",
]

export const mockFewAvailableStories = ["home", "about", "contact"]

// Shared args for stories
export const sharedArgs = {
  header: mockSimpleHeader,
  footer: mockSimpleFooter,
}
