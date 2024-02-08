import type { Metadata } from 'next';
import '../globals.css';

import { cn } from '@/lib/utils';
import { m1PlusRounded } from '@/components/fonts';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n';

export const metadata: Metadata = {
    title: {
        template: '%s | Johan Restrepo',
        default: 'Johan Restrepo',
    },
    description: 'Personal portfolio',
};

type Props = Readonly<{
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
}>;

export default function RootLayout({ children, params }: Props) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <body
                className={cn(
                    m1PlusRounded.variable,
                    'min-h-screen bg-background font-sans antialiased',
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <Container>{children}</Container>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
