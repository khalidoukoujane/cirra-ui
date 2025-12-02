# CirraUI

A lightweight, copy-paste component library for React with beautiful animations and minimal design.

## About

CirraUI is a collection of carefully crafted UI components that you can copy and paste into your project. No npm package, no bloat—just clean, customizable components that you own.

## Features

- 🎨 **Copy & Paste** - No installation required, just copy the code
- 🪶 **Lightweight** - Minimal bundle size with no unnecessary dependencies
- ✨ **Animated** - Subtle animations and micro-interactions
- 🎯 **Type-Safe** - Built with TypeScript for full type safety
- 🎨 **Customizable** - Own your code and customize however you want
- 🌙 **Dark Mode** - Built-in support for light and dark themes


## Development

This project is built with [Fumadocs](https://fumadocs.dev) and Next.js.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

## License

MIT

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
