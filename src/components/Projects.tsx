import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import defaultImage from '../../public/placeholder.svg';

type Props = {
  children?: React.ReactNode;
  title: string;
  slug: string;
  // TODO: Make src required
  src?: Pick<ImageProps, 'src'>;
};

const ProjectItem = ({ children, slug, src, title }: Props) => {
  const image = src || defaultImage;

  return (
    <div className="w-full text-center">
      <Link href={`/projects/${slug}`}>
        <Image src={image} alt={title} priority />
        <Heading as="h4" className="mt-2 capitalize tracking-tight">
          {title}
        </Heading>
        <p className="text-sm">{children}</p>
      </Link>
    </div>
  );
};

export default ProjectItem;
