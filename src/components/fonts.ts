import {M_PLUS_Rounded_1c} from 'next/font/google';
import {Open_Sans} from 'next/font/google';

export const m_plus_rounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});
