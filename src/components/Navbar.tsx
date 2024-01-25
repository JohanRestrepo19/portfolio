'use client';

import NextLink, { LinkProps } from 'next/link';
import { Container } from '@/components/Container';
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';

type LinkItemProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

const LinkItem = ({ className, children, ...props }: LinkItemProps) => {
  const path = usePathname();
  return (
    <NextLink
      {...props}
      className={cn(
        'p-2 underline-offset-4 hover:underline',
        {
          'bg-primary/70': path === props.href,
        },
        className,
      )}
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
        <div className="mr-5">
          <h1>
            <NextLink href="/">
              <span className="font-bold tracking-tighter">
                {/*TODO: icon*/}
                Johan Restrepo
              </span>
            </NextLink>
          </h1>
        </div>

        {/* Navlinks */}
        <div className="flex w-auto min-w-96 flex-grow items-center gap-2">
          <LinkItem href="/works">Works</LinkItem>
          <LinkItem
            href="https://github.com/JohanRestrepo19"
            className="inline-flex items-center gap-1"
          >
            <Github size={'1rem'} />
            Source
          </LinkItem>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
};
