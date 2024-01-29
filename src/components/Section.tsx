import Heading from '@/components/Heading';

export const SectionHeading = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <Heading
      as="h3"
      className="mb-4 mt-3 underline decoration-4 underline-offset-[6px]"
    >
      {children}
    </Heading>
  );
};

const Section = ({ children }: React.ComponentProps<'section'>) => {
  return <section className="mb-6">{children}</section>;
};

export default Section;
