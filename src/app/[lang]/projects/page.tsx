import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ProjectItem from '@/components/Projects';
import { Locale, getProjects } from '@/i18n';

type Props = {
  params: {
    lang: Locale
  }
}

export default function Projects({params}: Props) {
  const allProjects = getProjects(params.lang)

  return (
    <Container>
      <Heading as="h3" className="mb-4">
        Projects
      </Heading>
      <div className="grid gap-6 md:grid-cols-2">
        {allProjects.map(project => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
