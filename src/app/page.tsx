import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <div>Portfolio Content</div>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </Container>
    </main>
  );
}
