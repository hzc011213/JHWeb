import type { Metadata } from 'next';
import { Inter, Geist_Mono, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JH | Portfolio',
  description:
    'Personal portfolio built with Next.js, TypeScript, and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        inter.variable,
        geistMono.variable,
        'font-sans',
        geist.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Navbar />
          {children}
          <div className="fixed top-4 right-8 z-60 lg:right-16">
            <ThemeToggleButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
