import {type Metadata} from 'next';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import {ProjectItem} from '@/components/projects';
import {type Locale, getDictionary, getProjects} from '@/i18n';

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default function Projects({params}: PageProps) {
  const allProjects = getProjects(params.lang);
  const {
    pages: {projects},
  } = getDictionary(params.lang);

  return (
    <Container>
      <Heading as="h3" className="mb-4">
        {projects.heading}
      </Heading>
      <div className="grid gap-6 md:grid-cols-2">
        {allProjects.map(project => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}

export function generateMetadata({params}: PageProps): Metadata {
  const {
    pages: {projects},
  } = getDictionary(params.lang);
  return {title: projects.heading};
}
