import type { Dictionary, Project } from '@/lib/types';
import { allEnProjects, dictionary as enDictionary } from './en';
import { allEsProjects, dictionary as esDictionary } from './es';

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function getDictionary(locale: Locale): Dictionary {
  // This should return me the dictionary
  if (locale === 'en') return enDictionary;
  return esDictionary;
}

export function getProjects(locale: Locale): Project[] {
  // This should return me the projects content in the respective language.
  if (locale === 'en') return allEnProjects;
  return allEsProjects;
}
