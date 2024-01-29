import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Section, { SectionHeading } from '@/components/Section';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <div className="mb-6 text-center">
          <Heading>Johan Restrepo</Heading>
          <Heading as="h2">
            Systems and Computer Engineer & Software Developer
          </Heading>
        </div>

        <article>
          <Section>
            <SectionHeading>Profile</SectionHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </Paragraph>
          </Section>
          <Section>
            <SectionHeading>Bio</SectionHeading>
          </Section>
          <Section>
            <SectionHeading>About me</SectionHeading>
          </Section>
          <Section>
            <SectionHeading>On the web</SectionHeading>
          </Section>
        </article>
      </Container>
    </main>
  );
}
