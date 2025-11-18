import type { RichTextCodeBlockStoryblok } from "../../../types/storyblok-components"

// Mock rich text code block content variations
export const mockJavaScriptCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-javascript-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        attrs: { language: "javascript" },
        content: [
          {
            type: "text",
            text: `function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

const cart = [
  { name: "Apple", price: 1.50, quantity: 3 },
  { name: "Banana", price: 0.75, quantity: 6 },
  { name: "Orange", price: 2.00, quantity: 2 }
];

const total = calculateTotal(cart);
console.log(\`Total: $\${total.toFixed(2)}\`);`,
          },
        ],
      },
    ],
  },
}

export const mockTypeScriptCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-typescript-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        attrs: { language: "typescript" },
        content: [
          {
            type: "text",
            text: `interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

async function fetchUser(id: string): Promise<ApiResponse<User>> {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    
    return {
      data: user,
      status: 'success'
    };
  } catch (error) {
    return {
      data: null,
      status: 'error',
      message: 'Failed to fetch user'
    };
  }
}`,
          },
        ],
      },
    ],
  },
}

export const mockCSSCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-css-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        attrs: { language: "css" },
        content: [
          {
            type: "text",
            text: `@scope {
  .component-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-lg);
    border-radius: var(--radius-md);
    background: var(--surface-primary);
    box-shadow: var(--shadow-sm);
  }

  .component-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .component-card__title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
  }

  .component-card__content {
    color: var(--text-secondary);
    line-height: var(--line-height-relaxed);
  }
}`,
          },
        ],
      },
    ],
  },
}

export const mockHTMLCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-html-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        attrs: { language: "html" },
        content: [
          {
            type: "text",
            text: `<article class="blog-post">
  <header class="blog-post__header">
    <h1 class="blog-post__title">Understanding Web Components</h1>
    <time class="blog-post__date" datetime="2024-11-15">
      November 15, 2024
    </time>
  </header>
  
  <div class="blog-post__content">
    <p>Web components provide a way to create reusable, 
    encapsulated HTML elements that work across different 
    frameworks and libraries.</p>
    
    <section class="highlight-box">
      <h2>Key Benefits</h2>
      <ul>
        <li>Framework agnostic</li>
        <li>Encapsulated styling</li>
        <li>Reusable across projects</li>
      </ul>
    </section>
  </div>
</article>`,
          },
        ],
      },
    ],
  },
}

export const mockJSONCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-json-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        attrs: { language: "json" },
        content: [
          {
            type: "text",
            text: `{
  "name": "@gotpop/design-system",
  "version": "1.0.0",
  "description": "A comprehensive design system for modern web applications",
  "main": "dist/index.js",
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "storybook": "storybook dev -p 6006",
    "lint": "biome check ."
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@storybook/react": "^8.4.0",
    "@types/react": "^19.0.0",
    "typescript": "^5.6.0"
  }
}`,
          },
        ],
      },
    ],
  },
}

export const mockBashCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-bash-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        attrs: { language: "bash" },
        content: [
          {
            type: "text",
            text: `# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Deploy to staging
npm run deploy:staging

# Check code quality
npm run lint && npm run type-check`,
          },
        ],
      },
    ],
  },
}

export const mockPlainTextCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-plain-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        content: [
          {
            type: "text",
            text: `This is a plain text code block without syntax highlighting.
It can contain any kind of text content that should be displayed
in a monospace font with preserved whitespace.

Useful for:
- Configuration files
- Log outputs  
- ASCII art
- Simple text formatting`,
          },
        ],
      },
    ],
  },
}

export const mockEmptyCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-empty-1",
  component: "rich_text_code_block",
  content: {
    type: "doc",
    content: [
      {
        type: "code_block",
        content: [
          {
            type: "text",
            text: "",
          },
        ],
      },
    ],
  },
}

export const mockNoContentCodeBlok: RichTextCodeBlockStoryblok = {
  _uid: "code-no-content-1",
  component: "rich_text_code_block",
}
