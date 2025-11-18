import type { Meta, StoryObj } from "@storybook/react"
import type {
  FooterDefaultStoryblok,
  LinkListItemStoryblok,
  LinkListStoryblok,
  LogoDefaultStoryblok,
} from "../../../types/storyblok-components"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { FooterDefault } from "./FooterDefault"

const meta = {
  title: "Storyblok/FooterDefault",
  component: FooterDefault,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GridMaster>
        <Story />
      </GridMaster>
    ),
  ],
} satisfies Meta<typeof FooterDefault>

export default meta
type Story = StoryObj<typeof meta>

// Mock LogoDefault component
const mockLogo: LogoDefaultStoryblok = {
  _uid: "1e5633d8-d6f1-4c0c-9816-6f80dd5817d8",
  component: "logo_default",
  link: {
    id: "eb3b9128-0d1c-4495-9b52-20e0c9a60cac",
    url: "",
    linktype: "story",
    fieldtype: "multilink",
    cached_url: "home",
  },
  type: "",
}

// Mock LinkListItem components
const mockLinkListItems: LinkListItemStoryblok[] = [
  {
    _uid: "ce30b94d-6c4b-4900-9e60-9ba4bcd4a25e",
    component: "link_list_item",
    link_text: "Chrome Developers",
    link: {
      id: "",
      url: "https://developer.chrome.com/blog",
      linktype: "url",
      fieldtype: "multilink",
      cached_url: "https://developer.chrome.com/blog",
    },
    type: "",
  },
  {
    _uid: "605961eb-fd95-4c95-89e9-23a57557e871",
    component: "link_list_item",
    link_text: "Web.dev",
    link: {
      id: "",
      url: "https://web.dev",
      linktype: "url",
      fieldtype: "multilink",
      cached_url: "https://web.dev",
    },
    type: "",
  },
  {
    _uid: "6ae4f091-4bc8-4072-a7be-762fbc87f9ea",
    component: "link_list_item",
    link_text: "CSS Tricks",
    link: {
      id: "",
      url: "https://css-tricks.com",
      linktype: "url",
      fieldtype: "multilink",
      cached_url: "https://css-tricks.com",
    },
    type: "",
  },
]

const mockResourceLinks: LinkListItemStoryblok[] = [
  {
    _uid: "8ad5d233-d147-4468-9f01-896b3b15fd64",
    component: "link_list_item",
    link_text: "Documentation",
    link: {
      id: "",
      url: "/docs",
      linktype: "story",
      fieldtype: "multilink",
      cached_url: "/docs",
    },
    type: "",
  },
  {
    _uid: "9e7d37eb-1009-47a3-8e21-42dda1244ad8",
    component: "link_list_item",
    link_text: "GitHub",
    link: {
      id: "",
      url: "https://github.com",
      linktype: "url",
      fieldtype: "multilink",
      cached_url: "https://github.com",
    },
    type: "",
  },
  {
    _uid: "dba70930-3cc5-4a6c-8141-286951849dc9",
    component: "link_list_item",
    link_text: "Support",
    link: {
      id: "",
      url: "/support",
      linktype: "story",
      fieldtype: "multilink",
      cached_url: "/support",
    },
    type: "",
  },
]

// Mock LinkList components
const mockNavLists: LinkListStoryblok[] = [
  {
    _uid: "1ec0c221-8e64-4e5e-a65e-0f1fc42a42c9",
    component: "link_list",
    heading: "Blogs",
    links: mockLinkListItems,
  },
  {
    _uid: "7e670dea-2f90-4444-9363-35d0ba6efff8",
    component: "link_list",
    heading: "Resources",
    links: mockResourceLinks,
  },
]

// Main FooterDefault mock data
const mockFooterBlok: FooterDefaultStoryblok = {
  _uid: "footer-default-uid",
  component: "footer_default",
  logo: [mockLogo],
  nav: mockNavLists,
}

export const Default: Story = {
  args: {
    blok: mockFooterBlok,
  },
}

export const WithoutLogo: Story = {
  args: {
    blok: {
      ...mockFooterBlok,
      logo: [],
    },
  },
}

export const WithoutNav: Story = {
  args: {
    blok: {
      ...mockFooterBlok,
      nav: [],
    },
  },
}

export const Minimal: Story = {
  args: {
    blok: {
      _uid: "footer-minimal-uid",
      component: "footer_default",
      logo: [],
      nav: [],
    },
  },
}

export const SingleColumn: Story = {
  args: {
    blok: {
      ...mockFooterBlok,
      nav: [mockNavLists[0]], // Only Blogs column
    },
  },
}
