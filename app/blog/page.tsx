import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Termite & Waterproofing Guides',
  description:
    'Practical guides on termite treatment, waterproofing, and pest control costs, warranties, and prevention for Dehradun homeowners.',
  alternates: { canonical: '/blog' },
};

// Re-check which posts are due to go live at most once an hour, so future-dated
// posts appear automatically without a new deploy.
export const revalidate = 3600;

export default function BlogIndexPage() {
  const posts = [...getPublishedPosts()].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-forest-fade" />
      <div className="absolute inset-0 -z-10 bg-leaf-rays" />
      <div className="container-x pt-6 sm:pt-10 pb-10">
        <span className="chip-leaf">Guides</span>
        <h1 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-5xl text-ink-900 leading-tight">
          Termite &amp; waterproofing <span className="gradient-text">guides.</span>
        </h1>
        <p className="p-lead mt-5 max-w-2xl">
          Straight answers on cost, warranty, and prevention — written by the team
          that does the treatments, not a content farm.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 hover:shadow-forest transition-shadow">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
              <h2 className="mt-2 font-display font-bold text-lg text-ink-900">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand-700">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
