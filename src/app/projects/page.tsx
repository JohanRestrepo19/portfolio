import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ProjectItem from '@/components/Projects';

export default function Projects() {
  return (
    <Container>
      <Heading as="h3" className="mb-4">
        Projects
      </Heading>
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectItem title='turistriada' description='xd' href='/projects/turistriada' />
        <ProjectItem title='turistriada-landing' description='xd' href='/projects/turistriada-landing' />
      </div>
    </Container>
  );
}
