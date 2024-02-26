import type {Metadata} from 'next';
import './globals.css';

import {cn} from '@/lib/utils';
import {open_sans} from '@/components/fonts';
import {ThemeProvider} from '@/components/ThemeProvider';

// TODO: Add custom favicon
export const metadata: Metadata = {
  title: {
    template: '%s | Johan Restrepo',
    default: 'Johan Restrepo',
  },
  description: 'Personal portfolio',
};

type Props = Readonly<{children: React.ReactNode}>;

export default function RootLayout({children}: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          open_sans.variable,
          'min-h-screen bg-background font-sans antialiased',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
