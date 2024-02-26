import {type Metadata} from 'next';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import {ProjectTagItem} from '@/components/projects/ProjectTagItem';
import {type Locale, getProjects, getDictionary} from '@/i18n';
import {ProjectTagLink} from '@/components/projects';

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
      <ul className="my-4 ml-4 break-words space-y-2 md:space-y-0">
        <ProjectTagItem title={tags.stack} desc={project.tags.stack} />

        {project.tags.source && tags.source && (
          <ProjectTagLink title={tags.source} link={project.tags.source} />
        )}
        {project.tags.website && tags.website && (
          <ProjectTagLink title={tags.website} link={project.tags.website} />
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
