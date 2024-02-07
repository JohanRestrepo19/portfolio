import Link, { type LinkProps } from 'next/link';
import { Linkedin, Github } from 'lucide-react';

import { type Locale, getDictionary, i18n } from '@/i18n';

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

type PageProps = { params: { lang: Locale } };

export default function Home({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

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
            <SectionHeading>{dictionary.sections.profile.title}</SectionHeading>
            <Paragraph>{dictionary.sections.profile.description}</Paragraph>
          </Section>

          <Section>
            <SectionHeading>{dictionary.sections.bio.title}</SectionHeading>
            <div className="flex flex-col gap-y-6">
              {dictionary.sections.bio.bioItems.map(item => (
                <BioSection
                  key={item.title}
                  title={item.title}
                  year={item.year}
                >
                  {item.description}
                </BioSection>
              ))}
            </div>
          </Section>

          <Section>
            <SectionHeading>
              {dictionary.sections.likes.title} ♥
            </SectionHeading>
            <Paragraph>
              <Link
                href="https://github.com/JohanRestrepo19/nvim"
                target="_blank"
                className="hover:text-secondary hover:underline"
              >
                Neovim (btw)
              </Link>
              , {dictionary.sections.likes.content}
            </Paragraph>
          </Section>

          <Section>
            <SectionHeading>{dictionary.sections.web.title}</SectionHeading>
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
