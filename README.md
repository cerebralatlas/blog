# Personal Blog

A modern personal blog built with Astro, featuring Apple-inspired clean design.

## ✨ Features

### Design Aspects

- 🎨 **Clean & Beautiful**: Following Apple's design standards, minimalist yet elegant
- 📱 **Responsive Design**: Perfect adaptation for desktop and mobile devices
- 🎯 **User-Friendly**: Intuitive navigation and interaction experience

### Technical Aspects

- ⚡ **Astro-Powered**: Modern static site generator with lightning-fast loading
- 📝 **Markdown Support**: Complete Markdown writing experience
- 🔧 **TypeScript**: Type-safe development experience
- 🎨 **CSS Variables**: Consistent design system
- 📱 **PWA Ready**: Progressive Web App support

### Functional Aspects

- 🏠 **Homepage**: Personal introduction and latest post previews
- 📚 **Post List**: Article index sorted by year and date
- 📖 **Post Details**: Complete Markdown rendering and reading experience
- 📑 **Table of Contents**: Interactive sidebar TOC with click-to-jump functionality
- 🏷️ **Tag System**: Article categorization and tag display
- 🔍 **SEO Optimized**: Complete metadata and structured data

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to view the blog.

### Build Project

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📝 Content Management

### Adding New Posts

1. Create a new `.md` file in the `src/content/blog/` directory
2. Add frontmatter metadata:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-20
tags: ["Tag1", "Tag2"]
draft: false  # Optional, defaults to false
---

# Post Content

Your Markdown content here...
```

### File Structure

```
src/
├── content/
│   ├── config.ts          # Content collection configuration
│   └── blog/              # Blog posts
├── layouts/
│   └── Layout.astro       # Base layout
├── components/
│   ├── Navigation.astro   # Navigation component
│   └── TableOfContents.astro  # TOC component
└── pages/
    ├── index.astro        # Homepage
    └── blog/
        ├── index.astro    # Post list
        └── [...slug].astro # Post detail page
```

## 🎨 Design System

### Color Variables

```css
--color-primary: #1d1d1f;      /* Primary color */
--color-secondary: #86868b;    /* Secondary color */
--color-accent: #007aff;       /* Accent color */
--color-background: #ffffff;   /* Background color */
--color-surface: #f5f5f7;      /* Surface color */
```

### Spacing System

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
```

## 🔧 Customization

### Modify Blog Information

Edit `src/layouts/Layout.astro` and `src/components/Navigation.astro` to modify:

- Blog title
- Personal introduction
- Navigation links
- SEO information

### Add New Pages

1. Create a new `.astro` file in the `src/pages/` directory
2. Wrap page content with Layout component
3. Add links in the navigation component

## 📱 Mobile Optimization

- Responsive grid layout
- Touch-friendly interactive elements
- Optimized font sizes and spacing
- Mobile-friendly TOC navigation

## 🔍 SEO Features

- Semantic HTML structure
- Complete meta tags
- Structured data markup
- Auto-generated sitemap
- Optimized image handling

## 🛠️ Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Markdown** - Content writing
- **CSS3** - Styling and design
- **Responsive Design** - Adaptive layout

## 📖 Resources

- [Astro Documentation](https://docs.astro.build)
- [Markdown Syntax Guide](https://www.markdownguide.org)
- [Design Inspiration](https://www.apple.com)
