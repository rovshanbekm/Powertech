#  Powertech - Next.js Landing Page

A modern, multilingual landing page built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Internationalization (i18n)** - Supports Uzbek (UZ) and Russian (RU) languages
- ✅ **SEO Optimized** with Next.js metadata API
- ✅ **Image Optimization** using next/image
- ✅ **Responsive Design** with Tailwind CSS
- ✅ **Modern UI Components** with shadcn/ui
- ✅ **File-based Routing** with language prefixes (/uz, /ru)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically redirect to `/uz` (default language).

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── [lang]/            # Language-based routing
│   │   ├── page.tsx       # Home page
│   │   ├── products/      # Products pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   └── ...            # Other pages
│   ├── layout.tsx         # Root layout
│   └── providers.tsx     # Client providers
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities and types
│   └── index.css         # Global styles
├── middleware.ts          # i18n middleware
├── next.config.js         # Next.js configuration
└── tailwind.config.ts    # Tailwind configuration
```

## Routing

The app uses language-prefixed routes:

- `/uz` - Uzbek (default)
- `/uz/products` - Products page in Uzbek
- `/ru` - Russian
- `/ru/products` - Products page in Russian

All routes without a language prefix are automatically redirected to `/uz`.

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file if you need to configure API endpoints or other environment variables.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **React Query** - Data fetching
- **Axios** - HTTP client

## License

Private - All rights reserved
