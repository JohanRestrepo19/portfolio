'use client';

// TODO: Use correct languages

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Menu } from 'lucide-react';

import Container from '@/components/Container';
import ThemeToggle from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

type LinkItemProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

//TODO: Set correct NavLinks.
const LinkItem = ({ className, children, ...props }: LinkItemProps) => {
  const path = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        'p-2 underline-offset-4 hover:underline',
        {
          'rounded-md bg-secondary/45': path === props.href,
        },
        className,
      )}
    >
      {children}
    </Link>
  );
};

type Props = React.ComponentProps<'nav'>;

export const Navbar = ({ ...props }: Props) => {
  return (
    <nav
      {...props}
      className="sticky top-0 z-10 w-full bg-[#f2e9e1]/50 backdrop-blur-sm dark:bg-[#26233a]/50"
    >
      <Container className="flex items-center justify-between">
        {/* Logo and name */}
        <div className="mr-5">
          <h1>
            <Link href="/">
              <span className="font-bold tracking-tighter">Johan Restrepo</span>
            </Link>
          </h1>
        </div>

        {/* Navlinks */}
        <div className="hidden w-auto min-w-96 gap-2 md:flex md:flex-grow md:items-center">
          <LinkItem href="/projects">Projects</LinkItem>

          <LinkItem
            href="https://github.com/JohanRestrepo19/portfolio"
            className="inline-flex items-center gap-1"
          >
            <Github size={'1.2rem'} />
            Source
          </LinkItem>
        </div>

        <div className="flex justify-end gap-2">
          <ThemeToggle />

          <div className="block md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/projects">
                  <DropdownMenuItem>Projects</DropdownMenuItem>
                </Link>

                <Link href="https://github.com/JohanRestrepo19/portfolio">
                  <DropdownMenuItem>Source</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </nav>
  );
};
