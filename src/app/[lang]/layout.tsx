import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { type Locale } from '@/i18n';

type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default function LangLayout({ children, params }: Props) {
  return (
    <div lang={params.lang}>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
