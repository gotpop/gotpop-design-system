# @gotpop/scripts

Shared scripts and utilities for Storyblok projects.

## Scripts

### generate-icon-list.js
Generates a list of available icons for Storyblok datasource.

**Usage:**
```bash
npx generate-icon-list
```

### generate-storyblok-types.js
Generates TypeScript types from Storyblok component schemas.

**Usage:**
```bash
# Default output: src/types/storyblok-components.ts
npx generate-storyblok-types

# Custom output path
npx generate-storyblok-types --output types/storyblok.ts
npx generate-storyblok-types -o custom/path/types.ts

# Show help
npx generate-storyblok-types --help
```

**Options:**
- `-o, --output <path>` - Output file path (default: `src/types/storyblok-components.ts`)
- `-h, --help` - Show usage instructions

**Requirements:**
- `STORYBLOK_ACCESS_TOKEN` environment variable

### kill-ports.sh
Kills processes running on ports 3000 and 3010.

**Usage:**
```bash
npx kill-ports
```

### sync-baseline-datasource.js
Syncs baseline browser support data to Storyblok datasource.

**Usage:**
```bash
npx sync-baseline-datasource
```

**Requirements:**
- `STORYBLOK_MANAGEMENT_TOKEN` environment variable

### sync-icon-datasource.js
Syncs icon data to Storyblok datasource.

**Usage:**
```bash
npx sync-icon-datasource
```

**Requirements:**
- `STORYBLOK_MANAGEMENT_TOKEN` environment variable

## Installation

```bash
yarn add @gotpop/scripts
```

## Environment Variables

Most scripts require environment variables to be set:

- `STORYBLOK_ACCESS_TOKEN` - Required for `generate-storyblok-types`
- `STORYBLOK_MANAGEMENT_TOKEN` - Required for datasource sync scripts

You can set these in a `.env` file or pass them directly:

```bash
# Using .env file
STORYBLOK_ACCESS_TOKEN=your_token npx generate-storyblok-types

# Or with Node 22+ --env-file flag
node --env-file=.env ./node_modules/.bin/generate-storyblok-types
```
