import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['', '/services', '/about', '/contact', '/privacy-policy', '/blog'];
  const staticEntries = routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.7,
  }));
  const blogEntries = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...staticEntries, ...blogEntries];
}
