import {type NextRequest, NextResponse} from 'next/server';
import Negotiator from 'negotiator';
import {match as matchLocale} from '@formatjs/intl-localematcher';
import {i18n} from '@/i18n';

function getLocale(req: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  req.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({headers: negotiatorHeaders}).languages(
    i18n.locales as unknown as string[],
  );

  const locale = matchLocale(languages, i18n.locales, i18n.defaultLocale);

  return locale;
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);

    // e.g. incoming req is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        req.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|static|.*\\..*|_next/image|_next).*)'],
};
