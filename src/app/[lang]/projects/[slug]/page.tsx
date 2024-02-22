import {type Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import {Badge} from '@/components/ui/badge';
import {type Locale, getProjects, getDictionary} from '@/i18n';

type PageProps = {
  params: {
    lang: Locale;
    slug: string;
  };
};

export function generateStaticParams({params}: PageProps) {
  const allProjects = getProjects(params.lang);
  return allProjects.map(project => ({
    slug: project.slug,
  }));
}

export function generateMetadata({params}: PageProps): Metadata {
  const allProjects = getProjects(params.lang);
  const project = allProjects.find(project => project.slug === params.slug);

  if (!project) notFound();

  return {
    title: project.title,
  };
}

export default function ProjectPage({params}: PageProps) {
  const allProjects = getProjects(params.lang);
  const {
    pages: {
      project: {tags},
    },
  } = getDictionary(params.lang);
  const project = allProjects.find(project => project.slug === params.slug);

  if (!project) return notFound();

  return (
    <Container>
      <Heading as="h2" className="text-center">
        {project.title}
      </Heading>
      {project.detailedDesc.map((paragraph, idx) => (
        <Paragraph key={idx}>{paragraph}</Paragraph>
      ))}
      <ul className="my-4 ml-4 break-words">
        <li>
          <Badge className="mr-2 rounded-md">{tags.stack}</Badge>
          <span>{project.tags.stack}</span>
        </li>

        {project.tags.source && (
          <li>
            <Badge className="mr-2 rounded-md">{tags.source}</Badge>
            <Link
              href={project.tags.source}
              target="_blank"
              className="text-primary underline-offset-4 hover:underline"
            >
              {project.tags.source}
            </Link>
          </li>
        )}

        {project.tags.website && (
          <li>
            <Badge className="mr-2 rounded-md">{tags.website}</Badge>
            <Link
              href={project.tags.website}
              target="_blank"
              className="text-primary underline-offset-4 hover:underline"
            >
              {project.tags.website}
            </Link>
          </li>
        )}
      </ul>

      {project.contentImages?.map(img => (
        <Image
          key={img}
          src={img}
          alt={project.title}
          width={1280}
          height={720}
          priority
          quality={100}
          className="mb-4 w-full rounded-lg"
        />
      ))}
    </Container>
  );
}
