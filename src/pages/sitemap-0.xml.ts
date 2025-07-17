import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: '',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: '/blog',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog posts
  const postPages = posts
    .filter(post => !post.data.draft)
    .map(post => ({
      url: `/blog/${post.slug}`,
      lastmod: post.data.updatedDate?.toISOString() || post.data.pubDate.toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.8,
    }));

  const allPages = [...staticPages, ...postPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};