'use client';

import NextLink, { LinkProps } from 'next/link';
import { Container } from '@/components/Container';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type LinkItemProps = { children: React.ReactNode } & LinkProps;
const LinkItem = ({ children, ...props }: LinkItemProps) => {
  const path = usePathname();
  return (
    <NextLink
      {...props}
      className={cn('p-2 underline-offset-4 hover:underline', {
        'bg-primary/75': path === props.href,
      })}
    >
      {children}
    </NextLink>
  );
};

type Props = React.ComponentProps<'nav'>;

export const Navbar = ({ ...props }: Props) => {
  return (
    <nav
      {...props}
      className="sticky top-0 z-10 w-full bg-white/40 backdrop-blur-sm"
    >
      <Container className="flex items-center justify-between">
        {/* Logo and name */}
        <div>
          <h1>
            <NextLink href="/">
              <span className='font-bold'>
                {/*TODO: icon*/}
                Johan Restrepo
              </span>
            </NextLink>
          </h1>
        </div>

        {/* Navlinks */}
        <div>
          <LinkItem href="/works">Works</LinkItem>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
};
