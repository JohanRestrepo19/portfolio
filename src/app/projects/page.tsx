import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ProjectItem from '@/components/Projects';
import { allProjects } from 'contentlayer/generated';

export default function Projects() {
  return (
    <Container>
      <Heading as="h3" className="mb-4">
        Projects
      </Heading>
      <div className="grid gap-6 md:grid-cols-2">
        {allProjects.map(project => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </Container>
  );
}
