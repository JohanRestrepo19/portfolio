'use client';

import Link from 'next/link';
import {useParams} from 'next/navigation';
import {motion} from 'framer-motion';
import {ChevronRight} from 'lucide-react';
import {Button} from './ui/button';
import {cn} from '@/lib/utils';
import {type Locale} from '@/i18n';

type Props = {
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

const CTA = ({children, className, ...props}: Props) => {
  const params = useParams<{lang: Locale}>();

  return (
    <Button className={cn('mt-4', className)} {...props}>
      <Link href={`/${params.lang}/projects/`}>
        <div className="flex items-center justify-between gap-x-2">
          {children}
          <motion.span
            animate={{
              x: [0, 2, 0],
            }}
            transition={{duration: 0.2, repeat: Infinity, repeatDelay: 1.5}}
          >
            <ChevronRight size="1.2rem" />
          </motion.span>
        </div>
      </Link>
    </Button>
  );
};

export default CTA;
