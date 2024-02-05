import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ProjectItem from '@/components/Projects';
import { allEnProjects } from '@/i18n/en'; // TODO: Replace for corresponding user language.

export default function Projects() {
  return (
    <Container>
      <Heading as="h3" className="mb-4">
        Projects
      </Heading>
      <div className="grid gap-6 md:grid-cols-2">
        {allEnProjects.map(project => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
