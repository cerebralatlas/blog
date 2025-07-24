# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack & Architecture

This is a personal blog built with Astro 5.x using:
- **Astro** as the static site generator
- **TypeScript** for type safety
- **Markdown** for content with MDX support
- **CSS3** with CSS variables for consistent theming
- **Apple-inspired design** with clean, minimalist aesthetic

## Key Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands

# Content management
# Add new posts by creating .md files in src/content/blog/
```

## Content Structure

- **Blog posts**: `src/content/blog/*.md` with frontmatter schema
- **Content config**: `src/content/config.ts` defines blog collection schema
- **Static assets**: `src/assets/` for images and SVGs
- **Public assets**: `public/` for favicon and static files

## Page Architecture

- **Layout**: `src/layouts/Layout.astro` - base layout with global styles
- **Homepage**: `src/pages/index.astro` - personal intro + latest posts
- **Blog index**: `src/pages/blog/index.astro` - chronological post list
- **Post detail**: `src/pages/blog/[...slug].astro` - dynamic post rendering
- **About**: `src/pages/about.astro` - personal information page

## Components

- **Navigation**: `src/components/Navigation.astro` - site navigation
- **TableOfContents**: `src/components/TableOfContents.astro` - interactive TOC for posts

## Content Schema

Blog posts require this frontmatter:
```yaml
title: string
description: string
pubDate: date
tags: string[] (optional)
draft: boolean (optional, defaults to false)
updatedDate: date (optional)
```

## Design System

CSS variables defined in Layout.astro:
- Colors: `--color-primary`, `--color-secondary`, `--color-accent`, etc.
- Spacing: `--space-xs` (0.5rem) through `--space-2xl` (4rem)

## Extensions & Plugins

- **rehype-slug**: Auto-generates heading IDs
- **rehype-autolink-headings**: Adds anchor links to headings
- **remark-toc**: Table of contents generation