import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { blogPosts, getBlogPost } from '../posts';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tadashi Kumazawa`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-700 underline">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-gray-900">
            Blog
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        <article className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
            <p className="text-sm text-gray-500">{post.publishedAt}</p>
          </div>

          {post.thumbnailSrc ? (
            <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <Image
                src={post.thumbnailSrc}
                alt={post.thumbnailAlt || post.title}
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          ) : null}

          {post.render()}

          <div className="pt-6 border-t border-gray-200">
            <Link href="/blog" className="text-sm text-gray-700 underline">
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

