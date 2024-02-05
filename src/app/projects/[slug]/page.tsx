import Link from 'next/link';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { Badge } from '@/components/ui/badge';

// export function generateStaticParams() {
//   return allProjects.map(project => ({
//     slug: project._raw.flattenedPath,
//   }));
// }
//
// export function generateMetadata({ params }: PageProps): Metadata {
//   const project = allProjects.find(
//     project => project._raw.flattenedPath === params.slug,
//   );
//
//   if (!project) throw new Error(`Project not found for slug: ${params.slug}`);
//   return {
//     title: project.title,
//   };
// }

type PageProps = {
  params: { slug: string };
};

export default function ProjectPage({}: PageProps) {
  return (
    <Container>
      <Heading as="h2" className="text-center">
        title
      </Heading>
      <Paragraph>description</Paragraph>
      <ul className="my-4 ml-4">
        <li>
          <Badge className="mr-2 rounded-md">Stack</Badge>
          stack
        </li>

        <li>
          <Badge className="mr-2 rounded-md">Source</Badge>
          source
        </li>

        <li>
          <Badge className="mr-2 rounded-md">Website</Badge>
          <Link href="#">Website</Link>
        </li>
      </ul>
    </Container>
  );
}
