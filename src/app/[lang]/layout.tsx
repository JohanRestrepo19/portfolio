'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { type Locale } from '@/i18n';

const variants: Variants = {
  hidden: { opacity: 0, rotateY: 45 },
  active: { opacity: 1, rotateY: 0 },
  exit: { opacity: 0, rotateY: 45 },
};

type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default function LangLayout({ children, params }: Props) {
  const path = usePathname();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" key={path}>
        <motion.article
          lang={params.lang}
          variants={variants}
          initial="hidden"
          animate="active"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          onAnimationStart={() => {
            window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <Container>{children}</Container>
        </motion.article>
      </AnimatePresence>
      <Footer />
    </>
  );
}
