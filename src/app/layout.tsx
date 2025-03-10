import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Cinzel } from 'next/font/google';
import SakuraEffect from '@/components/SakuraEffect';

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
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
    <html lang="en" className="dark">
      <body className={`${cinzel.className} dark:bg-dark min-h-screen`}>
        <SakuraEffect />
        {/* Cherry blossom overlay for gradient effect */}
        <div className="cherry-blossom-overlay"></div>
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
} 