import { Badge } from '@/components/ui/badge';
import Heading from '@/components/Heading';

type BioSectionProps = {
    year: string;
    title: string;
} & React.ComponentProps<'div'>;

const BioSection = ({ children, title, year, ...props }: BioSectionProps) => {
    return (
        <div {...props}>
            <div className="mb-1 flex flex-wrap items-center justify-start gap-x-4 gap-y-2">
                <Badge className="rounded-md bg-foreground text-sm">
                    {year}
                </Badge>
                <Heading as="h4">{title}</Heading>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default BioSection;
