import Link, { type LinkProps } from 'next/link';
import { Linkedin, Github } from 'lucide-react';

import { i18n } from '@/i18n';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import BioSection from '@/components/Bio';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Section, { SectionHeading } from '@/components/Section';
import { Button } from '@/components/ui/button';

const ContactItem = ({
  href,
  children,
}: { children?: React.ReactNode } & LinkProps) => {
  return (
    <li>
      <Link href={href} target="_blank">
        <Button variant="ghost" className="font-bold text-primary">
          {children}
        </Button>
      </Link>
    </li>
  );
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

type PageProps = { params: { lang: string } };

export default function Home({ }: PageProps) {
  return (
    <main className="min-h-screen">
      <Container>
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>Johan Restrepo</AvatarFallback>
          </Avatar>
          <div>
            <Heading>Johan Restrepo</Heading>
            <Heading as="h3">
              Systems and Computer Engineer & Software Developer
            </Heading>
          </div>
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
            <div className="flex flex-col gap-y-6">
              <BioSection year="2023" title="Systems and Computer Engineering">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
                amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </BioSection>
              <BioSection year="2023" title="Systems and Computer Engineering">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
                amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </BioSection>
              <BioSection year="2023" title="Systems and Computer Engineering">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
                amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </BioSection>
              <BioSection year="2023" title="Systems and Computer Engineering">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
                amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </BioSection>
            </div>
          </Section>

          <Section>
            <SectionHeading>I ♥</SectionHeading>
            <Paragraph>
              <Link
                href="https://github.com/JohanRestrepo19/nvim"
                target="_blank"
                className="hover:text-secondary hover:underline"
              >
                Neovim (btw)
              </Link>
              , Music, Video Games, Learning Japanese and Playing Soccer
            </Paragraph>
          </Section>

          <Section>
            <SectionHeading>On the web</SectionHeading>
            <ul>
              <ContactItem href="https://github.com/JohanRestrepo19">
                <Github className="mr-2 h-4 w-4" />
                @JohanRestrepo19
              </ContactItem>
              <ContactItem href="https://www.linkedin.com/in/johanrestrepo19/">
                <Linkedin className="mr-2 h-4 w-4" />
                @JohanRestrepo19
              </ContactItem>
            </ul>
          </Section>
        </article>
      </Container>
    </main>
  );
}
