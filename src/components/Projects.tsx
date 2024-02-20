'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import Heading from '@/components/Heading';
import {type Locale} from '@/i18n';
import {type Project} from '@/lib/types';

type Props = {
  project: Project;
};

const ProjectItem = ({project}: Props) => {
  const params = useParams<{lang: Locale}>();

  return (
    <div className="w-full text-center">
      <Link href={`/${params.lang}/projects/${project.slug}`}>
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={720}
          height={400}
          priority
          className="rounded-lg"
        />

        <Heading as="h4" className="mt-2 capitalize tracking-tight">
          {project.title}
        </Heading>

        <p className="text-sm">{project.desc}</p>
      </Link>
    </div>
  );
};

export default ProjectItem;
