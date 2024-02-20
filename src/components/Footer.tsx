'use client';

import {getDictionary, type Locale} from '@/i18n';
import {useParams} from 'next/navigation';

const Footer = () => {
  const params = useParams<{lang: Locale}>();
  const {
    layout: {footer},
  } = getDictionary(params.lang);
  return (
    <footer className="text-center text-sm opacity-85">
      &copy;{new Date().getFullYear()} Johan Restrepo. {footer}
    </footer>
  );
};

export default Footer;
