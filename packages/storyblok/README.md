# @gotpop/storyblok

Storyblok integration package for gotpop projects.

## Features

- Centralized config management with caching
- HOC components for data fetching
- Path utilities for multi-tenant setup
- Type-safe Storyblok data handlers

## Installation

```bash
yarn add @gotpop/storyblok
```

## Usage

```typescript
import { getConfig, getStoryblokData } from "@gotpop/storyblok"
```

## Structure

- `/components` - HOCs for Storyblok components
- `/config` - Configuration and path utilities
- `/data` - Data fetching handlers
- `/routing` - Routing utilities
- `/utils` - Shared utilities
