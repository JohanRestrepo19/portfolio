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
        <ProjectItem title="turistriada" slug='turistriada'>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </ProjectItem>
        <ProjectItem title="turistriada landing page" slug='turistriada-landing'>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </ProjectItem>
      </div>
    </Container>
  );
}
