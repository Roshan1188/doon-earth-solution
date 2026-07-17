import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-posts';
import CTA from '@/components/CTA';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Doon Earth Solution' },
  };

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-forest-fade" />
        <div className="container-x pt-6 sm:pt-10 pb-10 max-w-3xl">
          <Link href="/blog" className="text-sm text-brand-700 hover:underline">← All guides</Link>
          <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">
            {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
          <h1 className="mt-2 font-display font-extrabold tracking-tight text-3xl sm:text-4xl text-ink-900 leading-tight">
            {post.title}
          </h1>
          <p className="p-lead mt-4">{post.excerpt}</p>

          <article className="mt-8 space-y-8">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display font-bold text-xl text-ink-900">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
                  {section.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </article>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
