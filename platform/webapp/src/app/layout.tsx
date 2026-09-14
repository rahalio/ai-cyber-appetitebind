import type { Metadata } from 'next';
import { Source_Code_Pro, Source_Sans_3 } from 'next/font/google';
import { AppProviders } from '@/components/providers';
import { AppShell } from '@/components/app-shell';
import './globals.css';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sourceCode = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Appetitebind',
  description:
    'Bind every AI use case to risk appetite and fairness before it decides.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.variable} ${sourceCode.variable} font-sans antialiased`}>
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
