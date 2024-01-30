import Container from '@/components/Container';
import Heading from '@/components/Heading';

type WorkItemProps = {
  children?: React.ReactNode;
};
const WorkItem = ({ children }: WorkItemProps) => {
  return <div className="w-full text-center">{children}</div>;
};

export default function Works() {
  return (
    <Container>
      <Heading as="h3">Projects</Heading>
      <div className="grid grid-cols-2 gap-6"></div>
    </Container>
  );
}
