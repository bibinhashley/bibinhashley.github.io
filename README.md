# Bibin Hashley O P - Portfolio Website

A modern, SEO-optimized portfolio website built with **Astro 5**, **React 19**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **[Astro 5.13.4](https://astro.build)** - Static Site Generator
- **[React 19](https://react.dev)** - UI Framework with latest features
- **[Tailwind CSS 3](https://tailwindcss.com)** - Utility-first CSS framework
- **[Framer Motion](https://framer.com/motion)** - Animation library
- **[Lucide React](https://lucide.dev)** - Beautiful icons
- **TypeScript** - Type-safe development

## ✨ Features

- ⚡ **Fast Performance** - Static site generation with minimal JavaScript
- 🎨 **Modern Design** - Glass morphism and smooth animations
- 📱 **Responsive** - Mobile-first design approach
- 🔍 **SEO Optimized** - Meta tags, structured data, and semantic HTML
- ♿ **Accessible** - WCAG compliant design
- 🌙 **Interactive Components** - React islands for interactivity

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/bibinhashley/bibinhashley.github.io.git
cd bibinhashley.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

```bash
npm run build
# Upload contents of `dist/` folder to your hosting provider
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx    # React component with interactivity
│   │   ├── Hero.tsx         # React component with animations
│   │   └── About.astro      # Static Astro component
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO
│   ├── pages/
│   │   └── index.astro      # Homepage
│   └── styles/
│       └── global.css       # Global styles
├── astro.config.mjs         # Astro configuration
└── tailwind.config.mjs      # Tailwind configuration
```

## 🎯 Migration from React

This project was migrated from a pure React application to Astro for better:

- **SEO Performance** - Server-side rendering and static generation
- **Loading Speed** - Minimal JavaScript bundle
- **Core Web Vitals** - Better Lighthouse scores
- **Developer Experience** - Component islands architecture

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

**Built with ❤️ by [Bibin Hashley O P](https://github.com/bibinhashley)**
