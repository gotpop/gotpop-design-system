import type {
  ConfigStoryblok,
  HeaderDefaultStoryblok,
  LogoDefaultStoryblok,
  NavDefaultStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"
import { LogoDefault } from "../LogoDefault"
import { NavDefault } from "../NavDefault"
import { NavItemDefault } from "../NavItemDefault"

export const mockHeaderBlok: HeaderDefaultStoryblok = {
  _uid: "header-1",
  component: "header_default",
  nav: [
    {
      _uid: "nav-1",
      component: "nav_default",
    },
  ],
  logo: [
    {
      _uid: "logo-1",
      component: "logo_default",
    },
  ],
}

export const mockLogoBlok: LogoDefaultStoryblok = {
  _uid: "logo-1",
  component: "logo_default",
  link: {
    cached_url: "/",
    linktype: "story",
  },
  type: "main",
}

export const mockNavBlok: NavDefaultStoryblok = {
  _uid: "nav-1",
  component: "nav_default",
  type: "main",
  nav_items: [
    {
      _uid: "nav-item-1",
      component: "nav_item_default",
      text: "Home",
      link: {
        cached_url: "/",
        linktype: "story",
      },
    },
    {
      _uid: "nav-item-2",
      component: "nav_item_default",
      text: "About",
      link: {
        cached_url: "/about",
        linktype: "story",
      },
    },
    {
      _uid: "nav-item-3",
      component: "nav_item_default",
      text: "Blog",
      link: {
        cached_url: "/blog",
        linktype: "story",
      },
    },
  ],
}

export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  app_name: "GotPop Blog",
  description: "A modern blog built with Next.js and Storyblok",
  root_name_space: "blog",
  primary_content_name_space: "blog",
}

// Mock React nodes for stories
export const mockLogoNode = <LogoDefault blok={mockLogoBlok} />

export const mockNavNode = (
  <NavDefault
    blok={mockNavBlok}
    config={mockConfig}
    blocks={mockNavBlok.nav_items?.map((item) => (
      <NavItemDefault
        key={item._uid}
        blok={item as NavItemDefaultStoryblok}
        config={mockConfig}
      />
    ))}
  />
)
