# Nuxt Content Snippet

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Easily import snippets in your Nuxt Content documents.

- [✨ &nbsp;Release Notes](https://github.com/phojie/nuxt-content-snippet/releases)
- [🏀 Online playground](https://stackblitz.com/github/phojie/nuxt-content-snippet?file=playground%content/index.md)
- [📖 &nbsp;Documentation](#usage)

## Features

- Import Code Snippets from any file
- Includes Syntax Highlighting

### Installation

**Warning:** This module requires Nuxt Content to work. Make sure to install it first.

1. Add `nuxt-content-snippet` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-content-snippet

# Using yarn
yarn add --dev nuxt-content-snippet

# Using npm
npm install --save-dev nuxt-content-snippet
```

2. Add `nuxt-content-snippet` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-content-snippet'
  ]
})
```

That's it! You can now use Nuxt Content Snippet in your Nuxt app ✨

### Usage

You can import snippets from any file in your project. The snippet will be highlighted using the file extension.

By default, the snippet will be imported from the `base directory` of your project. You can also specify a relative path to the file.

```md
@@@ ./components/MyComponent.vue
```

```md
@@@ @/components/MyComponent.vue
```

```md
@@@ ../src/components/MyComponent.vue 
```

If you want to highlight a specific section of the file, you can specify the lines to highlight using the following syntax:

```md
@@@ ./components/MyComponent.vue {2-4}
```

You can also visit the [online playground](https://stackblitz.com/github/phojie/nuxt-content-snippet) to see it in action.

### Configuration

**Warning:** Work in progress

Prefix is defined by default (`@@@`). You can change it in your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-content-snippet'
  ],
  contentSnippet: {
    prefix: '<<<'
  }
})
```

### Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-content-snippet/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-content-snippet

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-content-snippet.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-content-snippet

[license-src]: https://img.shields.io/npm/l/nuxt-content-snippet.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-content-snippet

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
