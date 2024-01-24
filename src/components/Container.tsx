import { twMerge } from 'tailwind-merge';

type Props = React.ComponentProps<'section'>;

export const Container = ({ children, className, ...props }: Props) => {
  return (
    <section
      {...props}
      className={twMerge('sm:container sm:w-[48rem] sm:p-2', className)}
    >
      {children}
    </section>
  );
};
