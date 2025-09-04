import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AdRemix AI - Spin up viral ad variations and test them on autopilot',
  description: 'AI-powered platform for creators and marketers to automatically generate and test social media ad creatives on TikTok and Instagram.',
  keywords: 'AI, advertising, social media, TikTok, Instagram, ad testing, marketing automation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
