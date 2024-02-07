import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'div'>;

const Container = ({ children, className, ...props }: Props) => {
    return (
        <div
            {...props}
            className={cn('w-full p-2 sm:container sm:max-w-3xl', className)}
        >
            {children}
        </div>
    );
};

export default Container;
