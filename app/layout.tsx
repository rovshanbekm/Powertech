import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../src/index.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Powertech - Avtomatik darvozalar va xavfsizlik tizimlari',
  description: 'O\'zbekistondagi eng yaxshi avtomatika brendlarining keng assortimenti. Professional o\'rnatish va 5 yil kafolat.',
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
