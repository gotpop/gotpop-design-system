# @gotpop/system

A TypeScript-first design system and component library built for Next.js applications with Storyblok CMS integration.

## Features

- 🎯 **TypeScript-first** - Raw TypeScript distribution, no compilation needed
- ⚛️ **React Server Components** - Built for Next.js App Router
- 🎨 **Storyblok Ready** - Pre-built components for Storyblok CMS
- 📱 **Responsive Design** - Mobile-first approach with semantic HTML
- 🎭 **Storybook Integration** - Comprehensive component documentation
- 🚀 **JSR Published** - Modern package distribution

## Installation

```bash
# Using JSR (recommended)
npx jsr add @gotpop/system

# Using npm
npm install @gotpop/system

# Using yarn
yarn add @gotpop/system

# Using pnpm
pnpm add @gotpop/system
```

## Usage

### Components

```tsx
import { Typography, LogoDefault } from "@gotpop/system/components"

export function MyComponent() {
  return (
    <div>
      <Typography variant="hero" tag="h1">
        Hello World
      </Typography>
      <LogoDefault />
    </div>
  )
}
```

### Storyblok Components

```tsx
import { HeroDefault, FooterDefault } from "@gotpop/system/components"
import type { HeroDefaultStoryblok } from "@gotpop/system/types"

export function StoryblokPage({ blok }: { blok: HeroDefaultStoryblok }) {
  return <HeroDefault blok={blok} />
}
```

### Utilities

```tsx
import { fetchStoryByUuid, cn } from "@gotpop/system/utils"
import { useMediaQuery } from "@gotpop/system/hooks"

// Storyblok data fetching
const story = await fetchStoryByUuid("uuid-here")

// CSS class utilities
const className = cn("base-class", { "conditional-class": true })

// React hooks
const isMobile = useMediaQuery("(max-width: 768px)")
```

## Package Exports

- `@gotpop/system` - Main entry point
- `@gotpop/system/components` - React components
- `@gotpop/system/utils` - Utility functions
- `@gotpop/system/types` - TypeScript types
- `@gotpop/system/lib` - Core libraries
- `@gotpop/system/hooks` - React hooks
- `@gotpop/system/constants` - Constants and tokens

## Requirements

- React 19+
- Next.js 15+
- TypeScript (recommended)

## Documentation

Visit [Storybook documentation](https://storybook.gotpop.dev) for comprehensive component examples and API documentation.

## License

MIT - see [LICENSE](https://github.com/gotpop/gotpop-system/blob/master/LICENSE) for details.

## Contributing

This package is part of the [gotpop-system monorepo](https://github.com/gotpop/gotpop-system). See the main repository for contribution guidelines.

## Publishing

### JSR Publishing (Recommended)

This package is published to JSR (JavaScript Registry) for modern TypeScript distribution:

```bash
# Manual publish from package directory
npm run jsr:publish

# Dry run to test
npm run jsr:publish:dry

# From monorepo root
yarn jsr:publish
```

### Automated Publishing

- **Trigger**: Push to `master` branch with changes in `packages/system/`
- **Process**: Type check → Auto-increment version → Publish to JSR
- **Registry**: [jsr.io/@gotpop/system](https://jsr.io/@gotpop/system)

### JSR Benefits

- **Raw TypeScript**: No build step, consume source directly
- **Better Tree-shaking**: Import exactly what you need
- **Type Safety**: Full TypeScript support with strict checking
- **Modern Standards**: ESM-first with proper exports