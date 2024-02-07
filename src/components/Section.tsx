import Heading from '@/components/Heading';
import { cn } from '@/lib/utils';

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

const Section = ({ children, className }: React.ComponentProps<'section'>) => {
    return <section className={cn('mb-6', className)}>{children}</section>;
};

export default Section;
