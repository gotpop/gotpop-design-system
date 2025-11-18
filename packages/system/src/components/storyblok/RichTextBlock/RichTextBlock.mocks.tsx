import type { RichTextBlockStoryblok } from "../../../types/storyblok-components"

// Mock rich text content variations
export const mockBasicRichTextBlok: RichTextBlockStoryblok = {
  _uid: "richtext-basic-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This is a simple paragraph with ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "bold text",
          },
          {
            type: "text",
            text: " and ",
          },
          {
            type: "text",
            marks: [{ type: "italic" }],
            text: "italic text",
          },
          {
            type: "text",
            text: " to demonstrate basic rich text formatting.",
          },
        ],
      },
    ],
  },
}

export const mockArticleRichTextBlok: RichTextBlockStoryblok = {
  _uid: "richtext-article-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Introduction to Component Design",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Component-based architecture has revolutionized how we build modern web applications. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Reusability, maintainability, and scalability",
          },
          {
            type: "text",
            text: " are the core principles that guide effective component design.",
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [
          {
            type: "text",
            text: "Key Benefits",
          },
        ],
      },
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [{ type: "bold" }],
                    text: "Modularity:",
                  },
                  {
                    type: "text",
                    text: " Components can be developed and tested in isolation",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [{ type: "bold" }],
                    text: "Reusability:",
                  },
                  {
                    type: "text",
                    text: " Write once, use everywhere approach",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [{ type: "bold" }],
                    text: "Consistency:",
                  },
                  {
                    type: "text",
                    text: " Uniform look and feel across the application",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This approach leads to more efficient development cycles and better user experiences.",
          },
        ],
      },
    ],
  },
}

export const mockListRichTextBlok: RichTextBlockStoryblok = {
  _uid: "richtext-list-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Development Checklist",
          },
        ],
      },
      {
        type: "ordered_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Design the component interface and props",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Implement the component logic",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Add proper TypeScript types",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Write comprehensive tests",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Create Storybook documentation",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Following this checklist ensures high-quality, maintainable components.",
          },
        ],
      },
    ],
  },
}

export const mockQuoteRichTextBlok: RichTextBlockStoryblok = {
  _uid: "richtext-quote-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Rich text content allows for expressive and engaging content creation. Here's an inspiring quote:",
          },
        ],
      },
      {
        type: "blockquote",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                marks: [{ type: "italic" }],
                text: "The best way to predict the future is to create it.",
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This philosophy drives innovation in web development and component design.",
          },
        ],
      },
    ],
  },
}

export const mockShortRichTextBlok: RichTextBlockStoryblok = {
  _uid: "richtext-short-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "A simple, short piece of rich text content.",
          },
        ],
      },
    ],
  },
}

export const mockEmptyRichTextBlok: RichTextBlockStoryblok = {
  _uid: "richtext-empty-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [],
  },
}

export const mockNoContentRichTextBlok: RichTextBlockStoryblok = {
  _uid: "richtext-no-content-1",
  component: "rich_text_block",
}
