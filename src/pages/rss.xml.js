import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: 'Cerebral Atlas\' Blog',
    description: 'Thoughts on technology, programming, and life from Cerebral Atlas',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      // Include tags if they exist
      categories: post.data.tags || [],
      // Use the post content as the full content
      content: post.body,
    })),
    customData: `<language>en-us</language>
    <generator>Astro v5.11.1</generator>
    <webMaster>hello@cerebralatlas.me (Cerebral Atlas)</webMaster>
    <managingEditor>hello@cerebralatlas.me (Cerebral Atlas)</managingEditor>`,
    stylesheet: '/rss-styles.xsl',
  });
}