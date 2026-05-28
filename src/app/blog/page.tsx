import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

import { blogPosts } from './posts';

export const metadata: Metadata = {
  title: 'Blog | Tadashi Kumazawa',
  description: 'Essays and notes on focus, productivity, and building better systems.',
};

const BlogPage = () => {
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
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black mb-3">Blog</h1>
          <p className="text-base text-gray-600">Essays and notes on focus, productivity, and building better systems.</p>
        </div>

        <div className="space-y-10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border border-gray-200 bg-white overflow-hidden hover:bg-gray-50"
            >
              <div className="p-6 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 group-hover:underline">
                  {post.title}
                </h2>
              </div>

              {post.thumbnailSrc ? (
                <div className="px-6 pb-4">
                  <div className="w-full overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                    <Image
                      src={post.thumbnailSrc}
                      alt={post.thumbnailAlt || post.title}
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              ) : null}

              <div className="px-6 pb-6 space-y-2">
                <p className="text-sm text-gray-500">{post.publishedAt}</p>
                <p className="text-base text-gray-700">{post.description}</p>
                <p className="text-base text-blue-700 font-medium group-hover:underline">Read More &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

