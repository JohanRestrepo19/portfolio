'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Frown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale, getDictionary } from '@/i18n';

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] as Locale;
  const {
    pages: { notFound },
  } = getDictionary(lang);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <Frown className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 {notFound.error}</h2>
      <p>{notFound.msg}</p>
      <Button>
        <Link href="/">{notFound.button}</Link>
      </Button>
    </main>
  );
}
