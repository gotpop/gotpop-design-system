import type {
  LinkListItemStoryblok,
  LinkListStoryblok,
} from "../../../types/storyblok-components"

// Mock link list items
export const mockLinkListItems: LinkListItemStoryblok[] = [
  {
    _uid: "link-item-1",
    component: "link_list_item",
    link_text: "Home",
    type: "internal",
    link: {
      cached_url: "/",
      linktype: "story",
    },
  },
  {
    _uid: "link-item-2",
    component: "link_list_item",
    link_text: "About Us",
    type: "internal",
    link: {
      cached_url: "/about",
      linktype: "story",
    },
  },
  {
    _uid: "link-item-3",
    component: "link_list_item",
    link_text: "Contact",
    type: "internal",
    link: {
      cached_url: "/contact",
      linktype: "story",
    },
  },
  {
    _uid: "link-item-4",
    component: "link_list_item",
    link_text: "GitHub",
    type: "external",
    link: {
      url: "https://github.com",
      linktype: "url",
      target: "_blank",
    },
  },
]

// Mock link lists with different configurations
export const mockNavigationLinkList: LinkListStoryblok = {
  _uid: "link-list-1",
  component: "link_list",
  heading: "Navigation",
  links: mockLinkListItems,
}

export const mockSocialLinkList: LinkListStoryblok = {
  _uid: "link-list-2",
  component: "link_list",
  heading: "Follow Us",
  links: [
    {
      _uid: "social-1",
      component: "link_list_item",
      link_text: "Twitter",
      type: "external",
      link: {
        url: "https://twitter.com/gotpop",
        linktype: "url",
        target: "_blank",
      },
    },
    {
      _uid: "social-2",
      component: "link_list_item",
      link_text: "LinkedIn",
      type: "external",
      link: {
        url: "https://linkedin.com/company/gotpop",
        linktype: "url",
        target: "_blank",
      },
    },
  ],
}

export const mockResourcesLinkList: LinkListStoryblok = {
  _uid: "link-list-3",
  component: "link_list",
  heading: "Resources",
  links: [
    {
      _uid: "resource-1",
      component: "link_list_item",
      link_text: "Documentation",
      type: "internal",
      link: {
        cached_url: "/docs",
        linktype: "story",
      },
    },
    {
      _uid: "resource-2",
      component: "link_list_item",
      link_text: "Blog",
      type: "internal",
      link: {
        cached_url: "/blog",
        linktype: "story",
      },
    },
    {
      _uid: "resource-3",
      component: "link_list_item",
      link_text: "Help Center",
      type: "internal",
      link: {
        cached_url: "/help",
        linktype: "story",
      },
    },
  ],
}
