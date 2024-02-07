export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function getDictionary(locale: Locale) {
  // This should return me the dictionary
}

export function getProjects(locale: Locale) {
  // This should return me the projects content in the respective language.
}
