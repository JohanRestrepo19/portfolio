import {cn} from '@/lib/utils';

const Paragraph = ({children, className}: React.ComponentProps<'p'>) => {
  return <p className={cn('text-justify indent-4', className)}>{children}</p>;
};

export default Paragraph;
