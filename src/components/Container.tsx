import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'section'>;

export const Container = ({ children, className, ...props }: Props) => {
  return (
    <section
      {...props}
      className={cn('w-full sm:container sm:max-w-3xl p-2', className)}
    >
      {children}
    </section>
  );
};
