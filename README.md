# JHWeb

Personal portfolio built with Next.js, TypeScript, Tailwind CSS, MDX, and
Vercel.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Development

Start the local server:

```bash
npm run dev
```

Then open http://localhost:3000.

MDX pages are enabled through `@next/mdx`. See
`src/app/writing/hello/page.mdx` for a starter writing page.

## Deploy

Import this repository into Vercel. The included `vercel.json` marks the
project as a Next.js app, and Vercel will use `npm run build` automatically.
