import { type Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { type Locale, getProjects } from '@/i18n';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { Badge } from '@/components/ui/badge';

type PageProps = {
  params: {
    lang: Locale;
    slug: string;
  };
};

export function generateStaticParams({ params }: PageProps) {
  const allProjects = getProjects(params.lang)
  return allProjects.map(project => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const allProjects = getProjects(params.lang)
  const project = allProjects.find(project => project.slug === params.slug);

  if (!project) throw new Error(`Project not found for slug: ${params.slug}`);

  return {
    title: project.title,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const allProjects = getProjects(params.lang)
  const project = allProjects.find(project => project.slug === params.slug);

  if (!project) return notFound();

  return (
    <Container>
      <Heading as="h2" className="text-center">
        {project.title}
      </Heading>
      <Paragraph>{project.description}</Paragraph>
      <ul className="my-4 ml-4 break-words">
        <li>
          <Badge className="mr-2 rounded-md">Stack</Badge>
          <span>{project.tags.stack}</span>
        </li>

        {project.tags.source && (
          <li>
            <Badge className="mr-2 rounded-md">Source</Badge>
            <Link href={project.tags.source}>{project.tags.source}</Link>
          </li>
        )}

        {project.tags.website && (
          <li>
            <Badge className="mr-2 rounded-md">Website</Badge>
            <Link href={project.tags.website}>{project.tags.website}</Link>
          </li>
        )}
      </ul>

      {project.contentImages?.map(img => (
        <Image
          key={img}
          src={img}
          alt={project.title}
          width={512}
          height={320}
          priority
          className="mb-4 w-full rounded-lg"
        />
      ))}
    </Container>
  );
}
