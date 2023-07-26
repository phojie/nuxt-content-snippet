# Nuxt Content Snippet

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Easily import snippets in your Nuxt Content documents.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@phojie/@phojie/nuxt-content-snippet?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `@phojie/nuxt-content-snippet` dependency to your project

```bash
# Using pnpm
pnpm add -D @phojie/nuxt-content-snippet

# Using yarn
yarn add --dev @phojie/nuxt-content-snippet

# Using npm
npm install --save-dev @phojie/nuxt-content-snippet
```

2. Add `@phojie/nuxt-content-snippet` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@phojie/nuxt-content-snippet'
  ]
})
```

That's it! You can now use Nuxt Content Snippet in your Nuxt app ✨

## Development

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
[npm-version-src]: https://img.shields.io/npm/v/@phojie/nuxt-content-snippet/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@phojie/nuxt-content-snippet

[npm-downloads-src]: https://img.shields.io/npm/dm/@phojie/nuxt-content-snippet.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@phojie/nuxt-content-snippet

[license-src]: https://img.shields.io/npm/l/@phojie/nuxt-content-snippet.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@phojie/nuxt-content-snippet

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
