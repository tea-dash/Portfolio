import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';

const cinzel = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400']
});

export const metadata: Metadata = {
  title: 'Tadashi Kumazawa | Portfolio',
  description: 'Personal portfolio of Tadashi Kumazawa - Software Engineer and Developer',
  keywords: ['Tadashi Kumazawa', 'Portfolio', 'Software Engineer', 'Developer', 'Web Development'],
  authors: [{ 
    name: 'Tadashi Kumazawa', 
    url: 'https://www.linkedin.com/in/tadashi-kumazawa-0a368421b'
  }],
  creator: 'Tadashi Kumazawa',
  openGraph: {
    title: 'Tadashi Kumazawa | Portfolio',
    description: 'Personal portfolio of Tadashi Kumazawa - Software Engineer and Developer',
    url: 'https://www.linkedin.com/in/tadashi-kumazawa-0a368421b',
    siteName: 'Tadashi Kumazawa Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tadashi Kumazawa | Portfolio',
    description: 'Personal portfolio of Tadashi Kumazawa - Software Engineer and Developer',
    creator: '@tadashikumazawa',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} min-h-screen bg-white text-black`}>
        {children}
      </body>
    </html>
  );
} 