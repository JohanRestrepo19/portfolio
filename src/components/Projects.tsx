import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import Heading from '@/components/Heading';

type ProjectItemProps = {
  src?: string;
  title: string;
  description: string;
} & LinkProps;

const ProjectItem = async ({
  src,
  href,
  title,
  description,
}: ProjectItemProps) => {
  return (
    <div className="w-full text-center">
      <Link href={href}>
        <Image
          src={src || '/placeholder.svg'}
          alt={title}
          width={720}
          height={400}
          priority
        />

        <Heading as="h4" className="mt-2 capitalize tracking-tight">
          {title}
        </Heading>

        <p className="text-sm">{description}</p>
      </Link>
    </div>
  );
};

export default ProjectItem;
