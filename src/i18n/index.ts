import type {Dictionary, Project} from '@/lib/types';
import {allEnProjects, dictionary as enDictionary} from './en';
import {allEsProjects, dictionary as esDictionary} from './es';

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function getDictionary(locale: string): Dictionary {
  if (locale === 'es') return esDictionary;
  return enDictionary;
}

export function getProjects(locale: string): Project[] {
  if (locale === 'es') return allEsProjects;
  return allEnProjects;
}
