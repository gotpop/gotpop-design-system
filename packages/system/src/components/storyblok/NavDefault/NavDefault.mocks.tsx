import type {
  ConfigStoryblok,
  NavDefaultStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"
import { NavItemDefault } from "../NavItemDefault"

// Mock navigation items
export const mockNavItems: NavItemDefaultStoryblok[] = [
  {
    _uid: "nav-item-1",
    component: "nav_item_default",
    text: "Home",
    type: "text",
    link: {
      cached_url: "/",
      linktype: "story",
    },
  },
  {
    _uid: "nav-item-2",
    component: "nav_item_default",
    text: "About",
    type: "text",
    link: {
      cached_url: "/about",
      linktype: "story",
    },
  },
  {
    _uid: "nav-item-3",
    component: "nav_item_default",
    text: "Blog",
    type: "text",
    link: {
      cached_url: "/blog",
      linktype: "story",
    },
  },
  {
    _uid: "nav-item-4",
    component: "nav_item_default",
    text: "Contact",
    type: "text",
    link: {
      cached_url: "/contact",
      linktype: "story",
    },
  },
]

export const mockNavItemsWithIcons: NavItemDefaultStoryblok[] = [
  {
    _uid: "nav-item-icon-1",
    component: "nav_item_default",
    text: "Dashboard",
    icon: "dashboard",
    type: "icon-text",
    link: {
      cached_url: "/dashboard",
      linktype: "story",
    },
  },
  {
    _uid: "nav-item-icon-2",
    component: "nav_item_default",
    text: "Settings",
    icon: "settings",
    type: "icon-text",
    link: {
      cached_url: "/settings",
      linktype: "story",
    },
  },
  {
    _uid: "nav-item-icon-3",
    component: "nav_item_default",
    text: "Profile",
    icon: "user",
    type: "icon-text",
    link: {
      cached_url: "/profile",
      linktype: "story",
    },
  },
]

export const mockSimpleNavItems: NavItemDefaultStoryblok[] = [
  {
    _uid: "nav-simple-1",
    component: "nav_item_default",
    text: "Home",
    type: "text",
    link: {
      cached_url: "/",
      linktype: "story",
    },
  },
  {
    _uid: "nav-simple-2",
    component: "nav_item_default",
    text: "Products",
    type: "text",
    link: {
      cached_url: "/products",
      linktype: "story",
    },
  },
]

// Mock navigation bloks
export const mockMainNavBlok: NavDefaultStoryblok = {
  _uid: "nav-main",
  component: "nav_default",
  type: "main",
  nav_items: mockNavItems,
}

export const mockIconNavBlok: NavDefaultStoryblok = {
  _uid: "nav-icons",
  component: "nav_default",
  type: "icon-nav",
  nav_items: mockNavItemsWithIcons,
}

export const mockSimpleNavBlok: NavDefaultStoryblok = {
  _uid: "nav-simple",
  component: "nav_default",
  type: "simple",
  nav_items: mockSimpleNavItems,
}

// Mock config
export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  app_name: "GotPop Blog",
  description: "A modern blog built with Next.js and Storyblok",
  root_name_space: "blog",
  primary_content_name_space: "blog",
}

// Mock React nodes for navigation blocks
export const mockMainNavBlocks = mockNavItems.map((item) => (
  <NavItemDefault key={item._uid} blok={item} config={mockConfig} />
))

export const mockIconNavBlocks = mockNavItemsWithIcons.map((item) => (
  <NavItemDefault key={item._uid} blok={item} config={mockConfig} />
))

export const mockSimpleNavBlocks = mockSimpleNavItems.map((item) => (
  <NavItemDefault key={item._uid} blok={item} config={mockConfig} />
))
