import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import defaultImage from '../../public/placeholder.svg';
import { type Project } from 'contentlayer/generated';

type Props = {
  project: Project;
  // TODO: Make src required
  src?: Pick<ImageProps, 'src'>;
};

const ProjectItem = ({ project, src }: Props) => {
  const image = src || defaultImage;
  const { title, body, url } = project;

  return (
    <div className="w-full text-center">
      <Link href={url}>
        <Image src={image} alt={title} priority />
        <Heading as="h4" className="mt-2 capitalize tracking-tight">
          {title}
        </Heading>
        <p className="text-sm">{body.raw}</p>
      </Link>
    </div>
  );
};

export default ProjectItem;
