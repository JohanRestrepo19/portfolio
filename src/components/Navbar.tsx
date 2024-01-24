import Link from 'next/link';
import { Container } from '@/components/Container';
import ThemeToggle from '@/components/ThemeToggle';

type Props = React.ComponentProps<'nav'>;

export const Navbar = ({ ...props }: Props) => {
  return (
    <nav {...props} className="sticky top-0 z-10 w-full bg-background">
      <Container className="flex justify-between items-center bg-red-200">
        {/* Logo and name */}
        <div>
          <h1>
            <Link href="/">
              <span>
                {/*TODO: icon*/}
                Johan Restrepo
              </span>
            </Link>
          </h1>
        </div>

        {/* Navlinks */}
        <div></div>

        <div>
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
};
