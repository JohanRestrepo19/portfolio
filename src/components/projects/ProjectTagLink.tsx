import Link from 'next/link';
import {Badge} from '@/components/ui/badge';

export function ProjectTagLink({title, link}: {title: string; link: string}) {
  return (
    <li className='flex flex-col items-start md:flex-row md:gap-x-2'>
      <Badge className="rounded-md">{title}</Badge>
      <Link
        href={link}
        target="_blank"
        className="text-primary underline-offset-4 hover:underline"
      >
        {link}
      </Link>
    </li>
  );
}
