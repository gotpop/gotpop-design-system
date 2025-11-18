import type {
  ConfigStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"

// Mock config
export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  app_name: "GotPop Blog",
  description: "A modern blog built with Next.js and Storyblok",
  root_name_space: "blog",
  primary_content_name_space: "blog",
}

// Text-only navigation items
export const mockTextOnlyNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-text-1",
  component: "nav_item_default",
  text: "About Us",
  type: "text",
  link: {
    cached_url: "/about",
    linktype: "story",
  },
}

// Icon-only navigation items
export const mockIconOnlyNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-icon-1",
  component: "nav_item_default",
  icon: "home",
  type: "icon",
  link: {
    cached_url: "/",
    linktype: "story",
  },
}

// Icon + text navigation items
export const mockIconTextNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-both-1",
  component: "nav_item_default",
  text: "Dashboard",
  icon: "dashboard",
  type: "icon-text",
  link: {
    cached_url: "/dashboard",
    linktype: "story",
  },
}

// External link navigation item
export const mockExternalNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-external-1",
  component: "nav_item_default",
  text: "GitHub",
  icon: "github",
  type: "external",
  link: {
    url: "https://github.com",
    linktype: "url",
    target: "_blank",
  },
}

// Disabled/no-link navigation item
export const mockDisabledNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-disabled-1",
  component: "nav_item_default",
  text: "Coming Soon",
  type: "disabled",
  // No link or invalid link to demonstrate disabled state
}

// Various navigation item scenarios
export const mockPrimaryNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-primary-1",
  component: "nav_item_default",
  text: "Home",
  type: "primary",
  link: {
    cached_url: "/",
    linktype: "story",
  },
}

export const mockSecondaryNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-secondary-1",
  component: "nav_item_default",
  text: "Blog",
  type: "secondary",
  link: {
    cached_url: "/blog",
    linktype: "story",
  },
}

export const mockSettingsNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-settings-1",
  component: "nav_item_default",
  text: "Settings",
  icon: "settings",
  type: "utility",
  link: {
    cached_url: "/settings",
    linktype: "story",
  },
}
