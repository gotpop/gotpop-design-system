import type { HeroDefaultStoryblok } from "../../../types/storyblok-components"

// Mock hero content variations
export const mockSimpleHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-simple-1",
  component: "hero_default",
  heading: "Welcome to Our Platform",
}

export const mockFullHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-full-1",
  component: "hero_default",
  heading: "Transform Your Digital Experience",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Discover innovative solutions that will revolutionize how you build, deploy, and scale your applications. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Start your journey today",
          },
          {
            type: "text",
            text: " and join thousands of developers already using our platform.",
          },
        ],
      },
    ],
  },
}

export const mockProductHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-product-1",
  component: "hero_default",
  heading: "Next-Generation Design System",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Build consistent, accessible, and beautiful user interfaces with our comprehensive component library and design tokens.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Designed for modern development workflows with TypeScript, React, and Storybook integration.",
          },
        ],
      },
    ],
  },
}

export const mockBlogHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-blog-1",
  component: "hero_default",
  heading: "Latest Insights & Updates",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Stay up-to-date with the latest trends in web development, design systems, and frontend architecture.",
          },
        ],
      },
    ],
  },
}

export const mockShortHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-short-1",
  component: "hero_default",
  heading: "Get Started",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Quick and easy setup.",
          },
        ],
      },
    ],
  },
}

export const mockLongHeadingHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-long-1",
  component: "hero_default",
  heading:
    "Comprehensive Platform for Modern Web Development, Design Systems, and Enterprise-Scale Applications",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Our enterprise-grade platform provides everything you need to build, test, deploy, and maintain large-scale web applications with confidence. From design tokens to component libraries, from CI/CD pipelines to monitoring solutions - we've got you covered.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Trusted by Fortune 500 companies",
          },
          {
            type: "text",
            text: " and used by over 100,000 developers worldwide.",
          },
        ],
      },
    ],
  },
}

export const mockEmptyHeadingHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-empty-1",
  component: "hero_default",
  heading: "",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This hero has no heading but includes subheading content.",
          },
        ],
      },
    ],
  },
}

export const mockNoSubheadingHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-no-sub-1",
  component: "hero_default",
  heading: "Heading Only Hero",
}
